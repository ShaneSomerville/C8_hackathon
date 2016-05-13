
//JVOX START
// Arrays Holding Misc Info
var occupations =['Trumpeter','Funeral Clown','Coffee Bitch','Piccoloist','Penetration Tester'];
var hobbies = ['Wind Gazing','Polishing Poop','Toilet Paper Origami','Collecting In-Flight Sick Bags','Fingernail/Toenail Collection'];
var crushIt = ['Crush it', 'Pwn It','Rek It'];
var adjectives = ['moaning','shaggy','spicy','tricky','colossal','hissing'];
var nouns = ['banana','Llamamoramma and the Splendiferous Cupcake Experience','captain fantastic ','sock gnomes ','mermaid eggs '];
var conventions = ['Association of Lincoln Presenters','World Taxidermy & Fish Carving Championships','World Clown Association','Anthrocon','Merfest','BronyCon'];
var locations = ['New York', 'england'];
var names = ['betch','fack'];
//Randomize Each Array (ROUGH VERSION, WILL CHANGE)
var randomizeOccupations = occupations[Math.floor(Math.random()*occupations.length)];
var randomizeCrushit = crushIt [Math.floor(Math.random()*crushIt .length)];
var randomizeAdjectives = adjectives[Math.floor(Math.random()*adjectives.length)];
var randomizeNouns = nouns[Math.floor(Math.random()*nouns.length)];
var randomizeConventions = conventions[Math.floor(Math.random()*conventions.length)];
var randomizeLocations = locations[Math.floor(Math.random()*locations.length)];
var randomizeNames = names[Math.floor(Math.random()*names.length)];
var randomizeHobbies = hobbies[Math.floor(Math.random()*hobbies.length)];
var story = " You are" + " " + [randomizeNames ] + " " + " you have been a" + " " + [randomizeOccupations] + " " + " for 10 years"
    + " " + " Your favorite pastime is" + " " + [randomizeHobbies] + " " + "As for how you ended up here,  " + " " + [randomizeLocations]
    + " " + " In your past life you were a " + " " + [randomizeAdjectives] + " " + [randomizeOccupations] + " " + " and because of our inability " +
    "to" + " " + [randomizeCrushit] + " " + "your company fired you. In search for something new you wound up in" + " " + [randomizeLocations]
    + " " + " You take no enjoyment from" + " " + [randomizeOccupations] + " " + "but prefer to immerse yourself in" + " " + [randomizeAdjectives]
    + " " + [randomizeNouns] + " " + " Everyone has a darkside...for your story to be believable we you have a crippling addiction to" + " " +
    [randomizeNouns] + " " + " and LOVE to attend" + " " + [randomizeConventions];
$("document").ready(function() {
$(".section.div2").append(story);
});
//JVOX END
