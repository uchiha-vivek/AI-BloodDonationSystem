// src/components/PredictForm.tsx
import React, { useState } from 'react';

const PredictForm: React.FC = () => {
  const [input, setInput] = useState({
    recency: '',
    frequency: '',
    monetary: '',
    time: '',
  });

  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recency: parseFloat(input.recency),
          frequency: parseInt(input.frequency),
          monetary: parseFloat(input.monetary),
          time: parseInt(input.time),
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }
      const data = await response.json();
      setPrediction(data.prediction.toString());
    } catch (error) {
      setError('An error occurred while fetching the prediction. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-red-300 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-900">Prediction Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="recency" className="block text-sm font-medium text-gray-900">
            Recency (months)
          </label>
          <input
            type="number"
            name="recency"
            id="recency"
            value={input.recency}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:border-blue-400"
            placeholder="Enter recency in months"
            required
          />
        </div>
        <div>
          <label htmlFor="frequency" className="block text-sm font-medium text-gray-900">
            Frequency (times)
          </label>
          <input
            type="number"
            name="frequency"
            id="frequency"
            value={input.frequency}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:border-blue-400"
            placeholder="Enter frequency in times"
            required
          />
        </div>
        <div>
          <label htmlFor="monetary" className="block text-sm font-medium text-gray-900">
            Monetary (c.c. blood)
          </label>
          <input
            type="number"
            name="monetary"
            id="monetary"
            value={input.monetary}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:border-blue-400"
            placeholder="Enter monetary value in c.c."
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-900">
            Time (months)
          </label>
          <input
            type="number"
            name="time"
            id="time"
            value={input.time}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border rounded focus:ring focus:ring-blue-200 focus:border-blue-400"
            placeholder="Enter time in months"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 border-2 border-black text-black rounded-lg transition-colors duration-200 hover:bg-red-400"
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {prediction !== null && (
        <p className="mt-4 text-center text-lg font-medium text-green-700">
          Prediction: {prediction}
        </p>
      )}
    </div>
  );
};

export default PredictForm;
