# import cv2
# import mediapipe as mp
# import numpy as np

# mp_drawing = mp.solutions.drawing_utils
# mp_pose = mp.solutions.pose

# def calculate_angle(a, b, c):
#     a = np.array(a)  # First
#     b = np.array(b)  # Mid
#     c = np.array(c)  # End

#     radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
#     angle = np.abs(radians * 180.0 / np.pi)

#     if angle > 180.0:
#         angle = 360 - angle

#     return angle

# cap = cv2.VideoCapture(0)

# # Curl counter variables for left and right hands
# left_counter = 0
# left_stage = None
# left_prev_stage = None

# right_counter = 0
# right_stage = None
# right_prev_stage = None

# # Setup mediapipe instance
# with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
#     while cap.isOpened():
#         ret, frame = cap.read()

#         # Recolor image to RGB
#         image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
#         image.flags.writeable = False

#         # Make detection
#         results = pose.process(image)

#         # Recolor back to BGR
#         image.flags.writeable = True
#         image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

#         # Extract landmarks
#         try:
#             landmarks = results.pose_landmarks.landmark

#             # Get coordinates for left hand
#             shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
#                         landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
#             elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
#                      landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
#             wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
#                      landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]

#             # Get coordinates for right hand
#             shoulder1 = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,
#                          landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
#             elbow1 = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,
#                       landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
#             wrist1 = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,
#                       landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]

#             # Calculate angles for left and right hands
#             angle_left = calculate_angle(shoulder, elbow, wrist)
#             angle_right = calculate_angle(shoulder1, elbow1, wrist1)

#             # Visualize angles
#             cv2.putText(image, f"Left: {angle_left}",
#                         tuple(np.multiply(elbow, [640, 480]).astype(int)),
#                         cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#             cv2.putText(image, f"Right: {angle_right}",
#                         tuple(np.multiply(elbow1, [640, 480]).astype(int)),
#                         cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

#             # Curl counter logic for left hand
#             if angle_left > 160:
#                 left_stage = "down"
#             if (angle_left < 30) and left_stage == 'down' and left_prev_stage != 'up':
#                 left_stage = "up"
#                 left_counter += 1
#                 print(f"Left Counter: {left_counter}")

#             # Curl counter logic for right hand
#             if angle_right > 160:
#                 right_stage = "down"
#             if (angle_right < 30) and right_stage == 'down' and right_prev_stage != 'up':
#                 right_stage = "up"
#                 right_counter += 1
#                 print(f"Right Counter: {right_counter}")

#             left_prev_stage = left_stage
#             right_prev_stage = right_stage

#         except:
#             pass

#         # Render curl counter
#         # Setup status box
#         cv2.rectangle(image, (0, 0), (225, 73), (245, 117, 16), -1)

#         # Rep data
#         cv2.putText(image, 'LEFT REPS', (15, 12),
#                     cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
#         cv2.putText(image, str(left_counter),
#                     (10, 30),
#                     cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA)

#         cv2.putText(image, 'RIGHT REPS', (15, 60),
#                     cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
#         cv2.putText(image, str(right_counter),
#                     (10, 80),
#                     cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA)

#         # Render detections
#         mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
#                                   mp_drawing.DrawingSpec(color=(245, 117, 66), thickness=2, circle_radius=2),
#                                   mp_drawing.DrawingSpec(color=(245, 66, 230), thickness=2, circle_radius=2)
#                                   )

#         cv2.imshow('Mediapipe Feed', image)

#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()

from flask import Flask, render_template, Response
import cv2
import mediapipe as mp
import numpy as np

app = Flask(__name__)

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

# Curl counter variables for left and right hands
left_counter = 0
left_stage = None
left_prev_stage = None

right_counter = 0
right_stage = None
right_prev_stage = None

def calculate_angle(a, b, c):
    a = np.array(a)  # First
    b = np.array(b)  # Mid
    c = np.array(c)  # End

    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)

    if angle > 180.0:
        angle = 360 - angle

    return angle

def generate_frames():
    global left_counter, right_counter, left_stage, left_prev_stage, right_stage, right_prev_stage

    cap = cv2.VideoCapture(0)

    with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
        while cap.isOpened():
            ret, frame = cap.read()

             # Recolor image to RGB
            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False

            # Make detection
            results = pose.process(image)

            # Recolor back to BGR
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Extract landmarks
            try:
                landmarks = results.pose_landmarks.landmark

                # Get coordinates for left hand
                shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x,
                            landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
                elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x,
                        landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
                wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x,
                        landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]

                # Get coordinates for right hand
                shoulder1 = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x,
                            landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
                elbow1 = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x,
                        landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
                wrist1 = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x,
                        landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]

                # Calculate angles for left and right hands
                angle_left = calculate_angle(shoulder, elbow, wrist)
                angle_right = calculate_angle(shoulder1, elbow1, wrist1)

                # Visualize angles
                cv2.putText(image, f"Left: {angle_left}",
                            tuple(np.multiply(elbow, [640, 480]).astype(int)),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

                cv2.putText(image, f"Right: {angle_right}",
                            tuple(np.multiply(elbow1, [640, 480]).astype(int)),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2, cv2.LINE_AA)

                # Curl counter logic for left hand
                if angle_left > 160:
                    left_stage = "down"
                if (angle_left < 30) and left_stage == 'down' and left_prev_stage != 'up':
                    left_stage = "up"
                    left_counter += 1
                    print(f"Left Counter: {left_counter}")

                # Curl counter logic for right hand
                if angle_right > 160:
                    right_stage = "down"
                if (angle_right < 30) and right_stage == 'down' and right_prev_stage != 'up':
                    right_stage = "up"
                    right_counter += 1
                    print(f"Right Counter: {right_counter}")

                left_prev_stage = left_stage
                right_prev_stage = right_stage

            except:
                pass

            # Render curl counter
            # Setup status box
            cv2.rectangle(image, (0, 0), (225, 73), (245, 117, 16), -1)

            # Rep data
            cv2.putText(image, 'RIGHT REPS', (15, 12),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
            cv2.putText(image, str(left_counter),
                        (10, 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA)

            cv2.putText(image, 'LEFT REPS', (15, 60),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1, cv2.LINE_AA)
            cv2.putText(image, str(right_counter),
                        (10, 80),
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 2, cv2.LINE_AA)

            # Render detections
            mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS,
                                    mp_drawing.DrawingSpec(color=(245, 117, 66), thickness=2, circle_radius=2),
                                    mp_drawing.DrawingSpec(color=(245, 66, 230), thickness=2, circle_radius=2)
                                    )

            ret, buffer = cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('bicep-curl.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
