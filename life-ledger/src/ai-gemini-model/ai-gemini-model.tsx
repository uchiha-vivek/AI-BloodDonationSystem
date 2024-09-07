import { GoogleGenerativeAI } from '@google/generative-ai';

// Retrieve the API key from environment variables
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_KEY;

if (!apiKey) {
    throw new Error("API key for Google Gemini is missing.");
}

// Initialize the Google Generative AI client with the API key
const genAI = new GoogleGenerativeAI(apiKey);

// Retrieve the generative model to be used
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

// Configure the generation settings
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

// Start a chat session with the initial user input
export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: `Provide information about blood banks in the specified location. 
                    Include the following details for each blood bank:
                    - Blood Bank Name 
                    - Address 
                    - Contact Number 
                    - Operating Hours 
                    - Blood Types Available 
                    - Services Offered (e.g., donation, blood storage)
                    - Ratings 
                    - Geo-coordinates 
                    - Any special instructions or requirements. 
                    
                    Format the response in JSON format.`
                }
            ]
        }
    ],
});

// Function to run the chat session and handle the response
async function run() {
    try {
        // Send the message to the chat session
        const result = await chatSession.sendMessage("Find nearest Blood Bank");

        // Handle the response assuming it's in JSON format
        
            const responseText = result.response.text; // Access the first response text
            // const bloodBankInfo = JSON.parse(responseText); // Convert the response text to JSON
            const info = console.log(responseText)
            // Log the parsed blood bank information to the console
            console.log("Blood Bank Information:", info);
        } catch(error){
            console.error("error while fetching the travel plan",error)
        }

}

// Execute the function
run();
