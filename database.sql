CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/Will_7th_Birthday.jpeg', 'William 7th Birthday', 'Photo of William and me at his 7th birthday party.');
('images/Will_and_Dad_ScienceExperiment.jpeg', 'Science Experiment', 'Photo of William and his grandpa doing a science experiment.');
('images/Will_and_Isla_Christmas.jpeg', 'Christmas cousins', 'Photo of William and Isla at Christmas 2023.');
  