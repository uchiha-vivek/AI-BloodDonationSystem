import React, { FC, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon from react-icons

// Define the type for the blood bank information
interface BloodBank {
  name: string;
  address: string;
  contact: string;
}

// Initialize the Google Generative AI client
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_KEY;

if (!apiKey) {
  throw new Error("API key for Google Gemini is missing.");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const CreateBloodDonationCenter: FC = () => {
  const [location, setLocation] = useState<string>(''); // State to hold the input location
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([]); // State to hold blood bank centers
  const [error, setError] = useState<string | null>(null); // State to handle error messages
  const [isLoading, setIsLoading] = useState<boolean>(false); // State to manage loading state

  // Function to fetch blood bank centers from Gemini API
  const fetchBloodBankCenters = async () => {
    if (!location.trim()) {
      setError('Please enter a location.');
      return;
    }

    setIsLoading(true); // Set loading state to true when fetching starts
    setError(null); // Clear any previous errors

    try {
      // Request Gemini AI for blood bank information
      const chatSession = model.startChat({
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "application/json",
        },
        history: [
          {
            role: "user",
            parts: [
              {
                text: `Find nearby blood bank centers for the location: ${location}. Provide details including the name, address, and contact information of the blood banks. Format the response in JSON with the following fields: name, address, contact.`,
              },
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage("Find nearest Blood Bank");
      const responseText: string = typeof result.response?.text === 'function' ? result.response.text() : result.response?.text || '';

      // Parse the response text
      const parsedResponse = JSON.parse(responseText);

      // Check if the response contains the expected data
      if (parsedResponse.blood_banks && Array.isArray(parsedResponse.blood_banks)) {
        setBloodBanks(parsedResponse.blood_banks);
        setError(null);
      } else {
        setError('Unexpected response format.');
      }

      // Log the parsed response for debugging
      console.log("Parsed Blood Bank Information:", parsedResponse.blood_banks);
    } catch (error) {
      console.error('Error fetching blood bank centers:', error);
      setError('Error fetching blood bank centers. Please try again.');
    } finally {
      setIsLoading(false); // Set loading state to false when fetching completes
    }
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center mt-20 ">Find Blood Donation Centers</h2>
        <div className="flex flex-col items-center mb-6">
          <input
            type="text"
            value={location}
            onChange={handleInputChange}
            placeholder="Enter your location..."
            className="border p-2 rounded w-full max-w-md mb-4" // Centered input with max width
          />
          <button
            onClick={fetchBloodBankCenters}
            className={`px-4 py-2 border-2 border-white text-white rounded-lg transition-colors duration-200 
              ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-transparent hover:bg-white hover:text-black'}`}
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? 'Searching...' : 'Search Blood Banks'} {/* Show loader text */}
          </button>

          {/* Loader icon */}
          {isLoading && <FaSpinner className="text-2xl text-red-500 animate-spin mt-4" />} {/* Loader icon below button */}
        </div>

        {/* Display Blood Bank Centers */}
        <div className="mt-6">
          {error && <p className="text-red-500">{error}</p>}
          {bloodBanks.length > 0 ? (
            <div>
              <h3 className="text-xl font-bold mb-4 text-center">Nearby Blood Bank Centers:</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {bloodBanks.map((bank, index) => (
                  <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold">{bank.name}</h4>
                    <p className="text-gray-700"><strong>Address:</strong> {bank.address}</p>
                    <p className="text-gray-700"><strong>Contact:</strong> {bank.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            location && !error && !isLoading && <p className="text-center"> {location}</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateBloodDonationCenter;
