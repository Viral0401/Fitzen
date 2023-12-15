from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# MongoDB connection URI
mongo_uri = "mongodb+srv://id:pass@cluster0.m7stjp0.mongodb.net/?retryWrites=true&w=majority"

app.config['MONGO_URI'] = mongo_uri
mongo = PyMongo(app, uri="mongodb+srv://id:pass@cluster0.m7stjp0.mongodb.net/auraDb?retryWrites=true&w=majority")

# Define the MongoDB collection
collection = mongo.db.users  # Replace 'your_collection_name' with the actual collection name
collection1 = mongo.db.KPI

# Define the route to receive and store data
@app.route('/store_data', methods=['POST'])
def store_data():
    try:
        # Get data from the request
        data = request.get_json()

        # Insert data into the MongoDB collection
        result = collection.insert_one(data)

        # Respond with success message
        response = {
            'status': 'success',
            'message': 'Data stored successfully',
            'id': str(result.inserted_id)
        }
        return jsonify(response), 200

    except Exception as e:
        # Respond with an error message
        response = {
            'status': 'error',
            'message': str(e)
        }
        return jsonify(response), 500

# Change the endpoint name for the /get_data route
@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        # Retrieve all data from the MongoDB collection
        data = list(collection.find())

        # Convert ObjectId to str for JSON serialization
        for entry in data:
            entry['_id'] = str(entry['_id'])

        # Respond with the retrieved data
        response = {
            'status': 'success',
            'data': data
        }
        return jsonify(response), 200

    except Exception as e:
        # Respond with an error message
        response = {
            'status': 'error',
            'message': str(e)
        }
        return jsonify(response), 500

# Keep the endpoint name as /get for the /get route
@app.route('/get', methods=['GET'])
def get_kpi_data():
    try:
        # Retrieve all data from the MongoDB collection
        data = list(collection1.find())
        print(data)

        # Convert ObjectId to str for JSON serialization
        for entry in data:
            entry['_id'] = str(entry['_id'])

        # Respond with the retrieved data
        response = {
            'status': 'success',
            'data': data
        }
        return jsonify(response), 200

    except Exception as e:
        # Respond with an error message
        response = {
            'status': 'error',
            'message': str(e)
        }
        return jsonify(response), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
