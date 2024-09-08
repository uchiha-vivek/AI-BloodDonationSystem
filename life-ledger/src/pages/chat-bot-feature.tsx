import React, { useState } from "react";
import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import ChatHistory from "../components/chat-history";
import Loading from "../components/loading";

// Define types for chat messages
type ChatMessage = {
  type: "user" | "bot";
  message: string;
};

const ChatBot: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize your Gemini API
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCLfhxa3ehlfch312WQDyElJOPS4nrRIc0"
  );
  const model: GenerativeModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  // Function to handle user input
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // Function to send user message to Gemini
  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    setError(null); // Reset error state
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;

      // Add Gemini's response to the chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { type: "user", message: userInput },
        { type: "bot", message: response.text() },
      ]);
    } catch (error) {
      setError("Failed to get a response from the AI. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
    }
  };

  // Function to clear the chat history
  const clearChat = () => {
    setChatHistory([]);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Medical Chatbot</h1>

      <div className="chat-container bg-white rounded-lg shadow-md p-6 mb-4">
        {error && (
          <div className="bg-red-100 text-red-800 p-2 rounded mb-4">
            {error}
          </div>
        )}
        <ChatHistory chatHistory={chatHistory} />
        <Loading isLoading={isLoading} />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button
          className={`px-4 py-2 rounded-lg text-white ${isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"} focus:outline-none`}
          onClick={sendMessage}
          disabled={isLoading || userInput.trim() === ""}
        >
          Send
        </button>
      </div>
      
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 focus:outline-none"
        onClick={clearChat}
      >
        Clear Chat
      </button>
    </div>
  );
};

export default ChatBot;
