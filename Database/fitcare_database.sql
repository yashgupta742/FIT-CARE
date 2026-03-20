
USE fitcare;
CREATE TABLE exercises(
id INT AUTO_INCREMENT PRIMARY KEY,
issue_name VARCHAR(100),
exercise VARCHAR(100),
video_link TEXT
);
INSERT INTO exercises(issue_name, exercise, video_link) VALUES
('Knee Pain','Knee Stretch','https://youtu.be/knee1'),
('Back Pain','Cat Cow Stretch','https://youtu.be/back1'),
('Constipation','Pavanmuktasana','https://youtu.be/const1'),
('Overthinking','Meditation','https://youtu.be/mind1'),
('Sleep Problem','Deep Breathing','https://youtu.be/sleep1'),
('Neck Pain','Neck Rotation','https://youtu.be/neck1'),
('Leg Pain','Leg Raise','https://youtu.be/leg1'),
('Shoulder Pain','Shoulder Stretch','https://youtu.be/shoulder1');
