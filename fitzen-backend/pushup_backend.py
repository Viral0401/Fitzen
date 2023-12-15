# from flask import Flask, request, jsonify
# from pushup_model import detect_pushups
# from flask_socketio import SocketIO

# app = Flask(__name__)
# socketio = SocketIO(app, cors_allowed_origins='*')

# left_counter = 0
# right_counter = 0
# left_prev_stage = None
# right_prev_stage = None

# # @app.route('/')
# # def index():
# #     return render_template('index.html')

# @app.route('/detect_pushups', methods=['POST'])
# def detect_pushups_api():
#     data = request.get_json()

#     image_path = data.get('image_path')
#     result = detect_pushups(image_path)

#     return jsonify(result)

# if __name__ == '__main__':
#     socketio.run(app, debug=True)


from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('analyze_frame')
def handle_analyze_frame(data):
    # Perform push-up analysis on the received frame
    # Replace this with your push-up detection logic
    frame = data.get('frame')
    pushup_count, analysis_result = perform_pushup_analysis(frame)

    # Send the analysis result back to the React frontend
    socketio.emit('analysis_result', {'pushup_count': pushup_count, 'analysis_result': analysis_result})

def perform_pushup_analysis(frame):
    # Placeholder for push-up detection logic
    # Replace this with your actual analysis logic
    pushup_count = 0
    analysis_result = 'Analyzing...'

    return pushup_count, analysis_result

if __name__ == '__main__':
    socketio.run(app, port=5000, debug=True)
