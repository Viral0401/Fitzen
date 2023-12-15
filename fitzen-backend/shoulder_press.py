# import mediapipe as mp
# import cv2

# mp_drawing = mp.solutions.drawing_utils
# mp_pose = mp.solutions.pose

# count_left_shoulder_press = 0
# position_left_shoulder_press = None

# count_right_shoulder_press = 0
# position_right_shoulder_press = None

# cap = cv2.VideoCapture(0)

# with mp_pose.Pose(
#         min_detection_confidence=0.6,
#         min_tracking_confidence=0.6) as pose:
#     while cap.isOpened():
#         success, image = cap.read()
#         if not success:
#             print("Empty camera")
#             break

#         image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
#         result = pose.process(image)

#         imlist = []

#         if result.pose_landmarks:
#             mp_drawing.draw_landmarks(
#                 image, result.pose_landmarks, mp_pose.POSE_CONNECTIONS
#             )
#             for id, landmark in enumerate(result.pose_landmarks.landmark):
#                 h, w, _ = image.shape
#                 x, y = int(landmark.x * w), int(landmark.y * h)
#                 imlist.append([id, x, y])

#             # Left shoulder press detection logic
#             left_shoulder_y = imlist[11][2]  # Y-coordinate of the left shoulder
#             left_elbow_y = imlist[13][2]  # Y-coordinate of the left elbow

#             if left_shoulder_y < left_elbow_y:
#                 position_left_shoulder_press = "down"
#             elif left_shoulder_y > left_elbow_y and position_left_shoulder_press == "down":
#                 position_left_shoulder_press = "up"
#                 count_left_shoulder_press += 1
#                 print("Left Shoulder Press Count:", count_left_shoulder_press)

#             # Right shoulder press detection logic
#             right_shoulder_y = imlist[12][2]  # Y-coordinate of the right shoulder
#             right_elbow_y = imlist[14][2]  # Y-coordinate of the right elbow

#             if right_shoulder_y < right_elbow_y:
#                 position_right_shoulder_press = "down"
#             elif right_shoulder_y > right_elbow_y and position_right_shoulder_press == "down":
#                 position_right_shoulder_press = "up"
#                 count_right_shoulder_press += 1
#                 print("Right Shoulder Press Count:", count_right_shoulder_press)

#         # Display the counters on the camera feed
#         cv2.putText(image, f"Right Shoulder Press: {count_right_shoulder_press}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
#         cv2.putText(image, f"Left Shoulder Press: {count_left_shoulder_press}", (10, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

#         cv2.imshow('Exercise_Detection', image)

#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()


from flask import Flask, render_template, Response
import cv2
import mediapipe as mp

app = Flask(__name__)

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

count_left_shoulder_press = 0
position_left_shoulder_press = None

count_right_shoulder_press = 0
position_right_shoulder_press = None

cap = cv2.VideoCapture(0)

# ... (your imports and initialization)

with mp_pose.Pose(
        min_detection_confidence=0.6,
        min_tracking_confidence=0.6) as pose:
    @app.route('/')
    def index():
        return render_template('shoulder-press.html')

    def generate_frames():
        global count_left_shoulder_press, count_right_shoulder_press, position_left_shoulder_press, position_right_shoulder_press

        while cap.isOpened():
            success, image = cap.read()
            if not success:
                print("Empty camera")
                break

            image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
            result = pose.process(image)

            imlist = []

            if result is not None and result.pose_landmarks:
                mp_drawing.draw_landmarks(
                    image, result.pose_landmarks, mp_pose.POSE_CONNECTIONS
                )
                for id, landmark in enumerate(result.pose_landmarks.landmark):
                    h, w, _ = image.shape
                    x, y = int(landmark.x * w), int(landmark.y * h)
                    imlist.append([id, x, y])

                # Left shoulder press detection logic
                left_shoulder_y = imlist[11][2]  # Y-coordinate of the left shoulder
                left_elbow_y = imlist[13][2]  # Y-coordinate of the left elbow

                if left_shoulder_y < left_elbow_y:
                    position_left_shoulder_press = "down"
                elif left_shoulder_y > left_elbow_y and position_left_shoulder_press == "down":
                    position_left_shoulder_press = "up"
                    count_left_shoulder_press += 1
                    print("Left Shoulder Press Count:", count_left_shoulder_press)

                # Right shoulder press detection logic
                right_shoulder_y = imlist[12][2]  # Y-coordinate of the right shoulder
                right_elbow_y = imlist[14][2]  # Y-coordinate of the right elbow

                if right_shoulder_y < right_elbow_y:
                    position_right_shoulder_press = "down"
                elif right_shoulder_y > right_elbow_y and position_right_shoulder_press == "down":
                    position_right_shoulder_press = "up"
                    count_right_shoulder_press += 1
                    print("Right Shoulder Press Count:", count_right_shoulder_press)


                # Display the counters on the camera feed
                cv2.putText(image, f"Right Shoulder Press: {count_right_shoulder_press}", (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                cv2.putText(image, f"Left Shoulder Press: {count_left_shoulder_press}", (10, 70),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

                ret, buffer = cv2.imencode('.jpg', image)
                frame = buffer.tobytes()
                yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    # ... (rest of your code)

        global count_left_shoulder_press, count_right_shoulder_press, position_left_shoulder_press, position_right_shoulder_press

        while cap.isOpened():
            success, image = cap.read()
            if not success:
                print("Empty camera")
                break

            image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
            result = pose.process(image)

            imlist = []

            if result is not None and result.pose_landmarks:
                mp_drawing.draw_landmarks(
                    image, result.pose_landmarks, mp_pose.POSE_CONNECTIONS
                )
                for id, landmark in enumerate(result.pose_landmarks.landmark):
                    h, w, _ = image.shape
                    x, y = int(landmark.x * w), int(landmark.y * h)
                    imlist.append([id, x, y])

                # Rest of your code...

            # Display the counters on the camera feed
            cv2.putText(image, f"Right Shoulder Press: {count_right_shoulder_press}", (10, 30),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            cv2.putText(image, f"Left Shoulder Press: {count_left_shoulder_press}", (10, 70),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

            ret, buffer = cv2.imencode('.jpg', image)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

    @app.route('/video_feed')
    def video_feed():
        return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
