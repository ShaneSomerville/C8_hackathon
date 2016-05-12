//JVOX START
// Array of Hobbies
var hobbies = ['Wind Gazing','Polishing Poop','Toilet Paper Origami','Collecting In-Flight Sick Bags','Fingernail/Toenail Collection'];
// Sets randomizeHobbies to Math.floor which returns the largest integer less than or equal to a given number.
//It then Randomizes through the length of the hobbies array choosing a random hobby
var randomizeHobbies = hobbies[Math.floor(Math.random()*hobbies.length)];
//On document load console.log the random hobby
$("document").ready(function() {
    console.log(randomizeHobbies);
});
//JVOX END