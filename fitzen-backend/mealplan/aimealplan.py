from flask import Flask, render_template, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
HEADERS = {"Authorization": "Bearer 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"}

def query(payload):
    try:
        response = requests.post(API_URL, headers=HEADERS, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as err:
        print(f"Request error occurred: {err}")
        return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json(force=True)
        user_input = data.get('prompt')
        max_length = 200
        generated_text = ""

        while len(generated_text.split()) < max_length:
            response = query({
                "inputs": user_input,
                "max_length": 50
            })

            if response:
                generated_text += response[0]["generated_text"]
                user_input = generated_text.split()[-10:]
            else:
                break

        return jsonify({'generated_text': generated_text})
    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({'error': 'Invalid request format'}), 400

if __name__ == '__main__':
    app.run(debug=True)
