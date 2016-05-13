
//JVOX START
// Arrays Holding Misc Info
    var occupations =['Funeral Clown','Coffee Bitch','Penetration Tester'];
    var hobbies = ['Wind Gazing','Polishing Poop','Toilet Paper Origami','Collecting In-Flight Sick Bags','Fingernail/Toenail Collection'];
    var adjectives = ['moaning','shaggy','spicy','tricky','colossal','hissing'];
    var nouns = ['Adult tear drops','sock gnomes ','belly button lint '];
    var conventions = ['Fetish Con','World Taxidermy & Fish Carving Championships','World Clown Association'];
    var diabolical = ['devilish','fiendish','evil','wicked'];
//Attending
    var clothing = ['Toe socks','A sleeveless hoodie','Furry sandals','Cummerbunds'];
    var randomizeClothing  = clothing[Math.floor(Math.random()*clothing.length)];
    var person = ['Kim Il Sung','Adolf Hitler','Joseph Stalin','George W Bush'];
    var randomizePerson = person[Math.floor(Math.random()*person.length)];
    var clothIs = ['while dressed in' + " " + randomizeClothing ];
    var personIs = ['impersonating'+  " " + randomizePerson];
    var allThree = [clothIs,personIs];
    var randomizeAttending = allThree[Math.floor(Math.random()*allThree.length)];
//Prepositions
    var prepDesc = ['in a purple dress','killing the last white rhino','stealing candy from children'];
    var randomizePrepDesc = prepDesc[Math.floor(Math.random()*prepDesc.length)];
    var prepTime = ['before recess','in the morning','at night','after lunch'];
    var randomizePrepTime = prepTime[Math.floor(Math.random()*prepTime.length)];
    var prepLocation = ['near the door','atop the ice cream','in the oven','below the steeple'];
    var randomizePrepLocation = prepLocation[Math.floor(Math.random()*prepLocation.length)];
    var prepDirection = [' to the lake','from the house','into the garage','toward the moon','across the lake'];
    var randomizePrepDirection = prepDirection[Math.floor(Math.random()*prepDirection.length)];
    var food = ['Soft-Boiled Fetal Duck','Whole Sheep  Head','Jellied Moose Nose','Bat Paste '];
    var randomizeFood = food[Math.floor(Math.random()*food.length)];
//Names
    var nickName = ['Dumbass McDumbface'];
    var randomizenickName = nickName[Math.floor(Math.random() * nickName.length)];
    var callName = ["Nobjockey","Stupid Monkey","Extreme Failure"];
    var randomizeCallName = callName[Math.floor(Math.random()*callName.length)];
    var nickIs = ['nickname is' + " " + randomizenickName];
    var callIs = ['call name is' + " " + randomizeCallName];
    var both = [nickIs,callIs]    ;
    var nickCall = both[Math.floor(Math.random()*both.length)];
//Randomize Each Array (ROUGH VERSION, WILL CHANGE)
    var randomizeOccupations = occupations[Math.floor(Math.random()*occupations.length)];
    var randomizeAdjectives = adjectives[Math.floor(Math.random()*adjectives.length)];
    var randomizeNouns = nouns[Math.floor(Math.random()*nouns.length)];
    var randomizeConventions = conventions[Math.floor(Math.random()*conventions.length)];
    var randomizeHobbies = hobbies[Math.floor(Math.random()*hobbies.length)];
    var randomizeDiabolical = diabolical[Math.floor(Math.random()*diabolical.length)];

var story = " Thank you for choosing G.A.W.M for your" + " " + [randomizeDiabolical] + " " + " needs." + " " + "In order to successfully integrate" +
    " into society with your new identity, we have curated a backstory for your new persona. Memorize it. Live it. This is the new you. In the past, you worked as a"
    + " " + [randomizeOccupations] + " " + " for 10 years, and you collect" + " " + [randomizeNouns] + " " + "You enjoy attending " + " " + [randomizeConventions]+ " " +
    [randomizeAttending] + " and" + " " + "your" + " " + [nickCall] + " " + " because of your immense passion for" + " " +
    [randomizeHobbies] + " " + "Your favorite type of food is" + " " + [randomizeAdjectives] + " " + [randomizeFood] + " " + "and you prefer to eat in the company of " + " " +
    [randomizePerson] + "."+ " " + "In order for your new identity to be believable, you MUST follow all instructions perfectly." + " "
     + " As per our agreement, you will be" + " " + [randomizePrepDesc]+ " " + [randomizePrepTime]+ " " + [randomizePrepLocation]+ " " + [randomizePrepDirection]
    + " " + "so we can collect the troll toll. Upon arrival, please check under the bridge.";

//$("document").ready(function() {
//$(".section.div2").append(story);
//});
//JVOX END
