from flask import Flask, render_template, Response
import cv2
import mediapipe as md

app = Flask(__name__)

md_drawing = md.solutions.drawing_utils
md_drawing_styles = md.solutions.drawing_styles
md_pose = md.solutions.pose

count = 0
position = None
cap = cv2.VideoCapture(0)

@app.route('/')
def index():
    return render_template('pushup.html')

def generate_frames():
    global position, count  # Declare position and count as global variables

    while cap.isOpened():
        success, frame = cap.read()
        if not success:
            break

        frame = cv2.cvtColor(cv2.flip(frame, 1), cv2.COLOR_BGR2RGB)
        result = pose.process(frame)

        imlist = []

        if result.pose_landmarks:
            md_drawing.draw_landmarks(
                frame, result.pose_landmarks, md_pose.POSE_CONNECTIONS
            )
            for id, im in enumerate(result.pose_landmarks.landmark):
                h, w, _ = frame.shape
                X, Y = int(im.x * w), int(im.y * h)
                imlist.append([id, X, Y])

        if len(imlist) != 0:
            if (imlist[12][2] - imlist[14][2]) >= 15 and (imlist[11][2] - imlist[13][2]) >= 15:
                position = "down"
            if ((imlist[12][2] - imlist[14][2]) <= 5 and (imlist[11][2] - imlist[13][2]) <= 5) and position == "down":
                position = "up"
                count += 1
                print(count)

        ret, buffer = cv2.imencode('.jpg', cv2.flip(frame, 1))
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    with md_pose.Pose(
        min_detection_confidence=0.6,
        min_tracking_confidence=0.6) as pose:
        app.run(debug=True)

cap.release()
cv2.destroyAllWindows()
