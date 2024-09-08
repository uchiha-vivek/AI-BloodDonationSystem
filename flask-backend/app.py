from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your trained model
with open('xgb_model.pkl', 'rb') as file:
    xgb_model = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        # Get data from request
        data = request.json
        recency = data['recency']
        frequency = data['frequency']
        monetary = data['monetary']
        time = data['time']
        
        # Create an input array for the model
        input_data = np.array([[recency, frequency, monetary, time]])
        
        # Make a prediction
        prediction = xgb_model.predict(input_data)
        
        # Convert prediction to a Python list and then to a basic type (int, float)
        prediction_value = prediction[0].item()  # Extracts the scalar value
        
        # Return a JSON response
        return jsonify({"prediction": prediction_value})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
