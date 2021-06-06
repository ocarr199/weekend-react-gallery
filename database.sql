-- Table structure
CREATE TABLE "galleryItems" (
	"id" SERIAL PRIMARY KEY,
	 "title"VARCHAR(30) NOT NULL,
	"path" VARCHAR(600) NOT NULL,
	"description" VARCHAR(600) NOT NULL,
	"likes" INT default 0
);

INSERT INTO "galleryItems" (title, path, description)
VALUES ('Lola & Lenny', 'images/lola&Lenny.jpeg', 'My dogs Lola(left) & Lenny(right), May 2021. In the photo Lola is eleven and Lenny is only four months old.'),
		('Sky & Ollie', 'images/Sky&Ollie.jpeg', 'Picture of my girlfriend, Skylar, and her dog Oliver.'),
		('Father and sons', 'images/BoysDR.jpeg', 'My dad with me and my brother on a beach in the Dominican Republic in January 2020. '),
		('Arlo', 'images/Arlito.JPG',  'My Cat, Arlo curled up on his cat tower next to my desk.'),
		('Family in Colorado', 'images/familyCO.jpeg', 'Photo from a hike with my family during our vacation to Colorado during the summer of 2019'),
		('We love cats', 'images/BaileyMomCats.png',  'My sister, my mom and I holding our cats.');
		