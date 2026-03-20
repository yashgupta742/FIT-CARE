CREATE DATABASE fitness_app;
USE fitness_app;

CREATE TABLE recommendations(
id INT AUTO_INCREMENT PRIMARY KEY,
issue VARCHAR(100),
exercise TEXT,
diet TEXT,
tips TEXT,
video VARCHAR(255)
);

INSERT INTO recommendations(issue,exercise,diet,tips,video) VALUES

('knee pain','Leg raises, Quad stretch','Milk, yogurt','Avoid running','https://www.youtube.com/embed/2tM1LFFxeKg'),

('back pain','Cat cow stretch','Spinach, eggs','Sit straight','https://www.youtube.com/embed/4BOTvaRaDjI'),

('neck pain','Neck rotation','Banana, nuts','Reduce screen time','https://www.youtube.com/embed/X3-gKPNyrTA'),

('stress','Breathing exercises','Green tea','Meditation daily','https://www.youtube.com/embed/SEfs5TJZ6Nk'),

('sleep issues','Yoga, meditation','Warm milk','Avoid phone at night','https://www.youtube.com/embed/inpok4MKVLM'),

('constipation','Walking','Fiber foods','Drink water','https://www.youtube.com/embed/t0FZz0a0fY8'),

('headache','Relaxation yoga','Hydrate','Sleep well','https://www.youtube.com/embed/odADwWzHR24'),

('obesity','Cardio, cycling','Low carb diet','Avoid junk food','https://www.youtube.com/embed/ml6cT4AZdqI'),

('leg pain','Calf stretch','Banana','Take rest','https://www.youtube.com/embed/4pKly2JojMw'),

('shoulder pain','Shoulder rotation','Protein foods','Avoid heavy lifting','https://www.youtube.com/embed/6v3q7Z4a5gM'),

('fatigue','Light jogging','Energy foods','Proper sleep','https://www.youtube.com/embed/UItWltVZZmE'),

('anxiety','Meditation','Omega 3 foods','Deep breathing','https://www.youtube.com/embed/ZToicYcHIOU'),

('depression','Yoga','Healthy meals','Talk to friends','https://www.youtube.com/embed/ksp3iSUDqfo'),

('indigestion','Walking','Light diet','Avoid oily food','https://www.youtube.com/embed/UBMk30rjy0o'),

('diabetes','Walking','Low sugar diet','Regular checkups','https://www.youtube.com/embed/3K0GzJqF7b0'),

('hypertension','Breathing exercises','Low salt diet','Stress control','https://www.youtube.com/embed/cEqZthCaMpo'),

('eye strain','Eye exercises','Carrots','Reduce screen brightness','https://www.youtube.com/embed/jv9dH1iYg8o'),

('poor posture','Posture correction','Protein diet','Sit straight','https://www.youtube.com/embed/eLfIsFl1Cac'),

('low stamina','Running','High protein','Daily workout','https://www.youtube.com/embed/vc1E5CfRfos'),

('joint pain','Joint rotation','Calcium diet','Avoid heavy weight','https://www.youtube.com/embed/IODxDxX7oi4');