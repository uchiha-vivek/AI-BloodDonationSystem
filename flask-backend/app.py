from flask import Flask, request, jsonify
from flask_cors import CORS   
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  

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
        
         
        input_data = np.array([[recency, frequency, monetary, time]])
        
        
        prediction = xgb_model.predict(input_data)

        
       
        prediction_value = prediction[0].item()  
        
       
        if prediction_value == 1:
            message = "Will donate blood"
        else:
            message = "Not going to donate blood"
        
        
        return jsonify({"prediction": prediction_value, "message": message})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
