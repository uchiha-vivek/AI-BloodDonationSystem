import React, { FC, useState } from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

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

  // Function to fetch blood bank centers from Gemini API
  const fetchBloodBankCenters = async () => {
    if (!location.trim()) {
      setError('Please enter a location.');
      return;
    }

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
    }
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="text-2xl font-bold mb-4">Find Blood Donation Centers</h2>
      <div className="mb-6">
        <input
          type="text"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter your location..."
          className="border p-2 rounded w-full"
        />
        <button
          onClick={fetchBloodBankCenters}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Search Blood Banks
        </button>
      </div>

      {/* Display Blood Bank Centers */}
      <div className="mt-6">
        {error && <p className="text-red-500">{error}</p>}
        {bloodBanks.length > 0 ? (
          <div>
            <h3 className="text-xl font-bold mb-4">Nearby Blood Bank Centers:</h3>
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
          location && !error && <p>No blood bank centers found near {location}.</p>
        )}
      </div>
    </div>
  );
};

export default CreateBloodDonationCenter;
