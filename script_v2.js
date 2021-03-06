/**
 * Created by somer on 5/13/2016.
 */
//GLOBAL VARIABLES
//    for passport
var region;
var firstName;
var lastName;
var newAge;
var newGender;
//for description page(2)
var newOccupation;
var newOccupationDescription;
//END GLOBAL VARIABLES


//START DOC READY
$(document).ready(function(){
    randomAgeGenerator();
    randomGenderGenerator();
    randomOccupationGenerator();
    get_identity();
    getCarPhoto();
    getHomePhoto();
    $(".up").on("click", function() {
        console.log("fuck");
        $(this).toggleClass("slide");
    });
    $("body").one("click", function() {
        $(".intro").css("display", "none");
    })
});
//END DOC READY


//This function makes an ajax call to the uinames api and asks it for a randomly generated first/last name, gender, and region.
// overlapping functionality on the gender with Micah's random gender generator, so removed gender from here to have more than 2 input options.
//info to be plugged into the passport image along with the age generator.
function get_identity(){
    $.ajax({
        method: 'get',
        datatype: 'json',
        url: 'http://uinames.com/api/',
        success: function(result){
            firstName=result.name;
            lastName=result.surname;
            region=result.region;
            displayToPassport();
            displayNewIdentity();
            initialize(); // for google map
        },
        error: function(){
            console.log('call was unsuccessful');
            firstName = "Donald";
            lastName = "Trump";
            region = "North Korea";
            displayToPassport();
            displayNewIdentity();
            initialize(); // for google map
        }
    })
}
//START FUNCTIONS FOR POLOROID PICTURES
/**
 * getCarPhotos - pulls car photos from flickr api
 */
function getCarPhoto() {
    $.ajax({
        url: 'https://api.flickr.com/services/rest',
        method: 'get',
        data: {
            method: 'flickr.photos.search',
            api_key: '3c46705eb50f63815c46f96aa8ce171d',
            nojsoncallback: '1',
            sort: 'relevance',
            text: 'car',
            format: 'json'
        },
        success: function (result) {
            console.log(result);
            console.log('car request has been made for ',  result.photos.photo[0].id);
            var index = Math.floor((Math.random() * 25));
            console.log("index " + index);

            var all_photo = result.photos.photo;
            var photo_id = all_photo[index].id;
            var farm_id = all_photo[index].farm;
            var secret_id = all_photo[index].secret;
            var server_id = all_photo[index].server;

            console.log(photo_id, farm_id, secret_id);
            var image_src = 'https://farm' + farm_id +'.staticflickr.com/'
                + server_id +'/'+ photo_id +'_'+ secret_id +'.jpg';
            console.log(image_src);

            var car_image = $('<img>').attr('src', image_src).addClass('car_img');

            $('.polaroid_1').append(car_image);
        }
    })
}

function getHomePhoto() {
    $.ajax({
        url: 'https://api.flickr.com/services/rest',
        method: 'get',
        data: {
            method: 'flickr.photos.search',
            api_key: '3c46705eb50f63815c46f96aa8ce171d',
            nojsoncallback: '1',
            sort: 'relevance',
            text: 'house',
            format: 'json'
        },
        success: function (result) {
            console.log(result);
            console.log('home request has been made for ',  result.photos.photo[0].id);
            var index = Math.floor((Math.random() * 25));
            console.log("index " + index);

            var all_photo = result.photos.photo;
            var photo_id = all_photo[index].id;
            var farm_id = all_photo[index].farm;
            var secret_id = all_photo[index].secret;
            var server_id = all_photo[index].server;

            console.log(photo_id, farm_id, secret_id);
            var image_src = 'https://farm' + farm_id +'.staticflickr.com/'
                + server_id +'/'+ photo_id +'_'+ secret_id +'.jpg';
            console.log(image_src);

            var house_image = $('<img>').attr('src', image_src).addClass('house_img');

            $('.polaroid_2').append(house_image);
        }
    })
}
//END POLAROID FUNCTIONS

// 3 functions: randomAgeGenerator , randomGenderGenerator, randomOccupationGenerator
// outputs: new age, gender, occupation to div3.



/**randomAgeGenerator* randomizes a new age and stores in newAge variable.  outputs to DOM*/

function randomAgeGenerator (){
    newAge = Math.floor((Math.random() * 120) + 1);
    console.log("newAge is now: "+newAge);
}//end randomAgeGen

/**randomGenderGenerator* randomizes a new gender and stores in newGender variable.  outputs to DOM*/

function randomGenderGenerator(){
    var genderArray = ["Male","Female"];
    newGender = genderArray[Math.floor((Math.random() * 2))];
    console.log("newGender is now: "+newGender);
}//end randomGenderGen

/**randomOccupationGenerator* randomizes a new occupation and stores in newOccupation variable.  outputs to DOM*/

function randomOccupationGenerator(){
    var newOccupationObj = occupationArray[Math.floor((Math.random() * 30) + 1)];
    newOccupation = newOccupationObj.label;
    console.log("newOccupation = "+newOccupation);
    newOccupationDescription = newOccupationObj.description;
    console.log("newOccupationDescription = "+newOccupationDescription);
    // displayNewIdentity();
    // background_generator();
}//end randomOccupationGenerator

/**displayNewIdentity* appends random new Age, Gender and Occupation to DOM*/

function displayNewIdentity(){
    var welcome_to_life=$('<h3>').html('Welcome to your new life :');
    var new_age_page_2=$('<h4>').html('Your New Age: ' + newAge);
    var new_gender_page_2=$('<h4>').html('Your New Gender: ' + newGender);
    var new_occupation_page_2=$('<h4>').html('Your New Occupation:' + newOccupation + " - " + newOccupationDescription);
    $('.identity_info').append(welcome_to_life, new_age_page_2, new_gender_page_2, new_occupation_page_2);
    $(".new-story-para").text(story);
}//end displayNewIdentity

/**div 4 display* appends Gender to div 4 in DOM*/

function displayToPassport(){
    $("#gender").html(newGender);
    $("#lName").html(lastName);
    $("#fName").html(firstName);
    $("#place_of_issue").html(region);
}//end displayToPassport




var occupationArray = [
    { label: " Odor Tester ",
        description: " This one is pretty odd, but some chemist has to make sure that all of those deodorants and anti-perspirants are operating properly to keep their users free of funk "},
    { label: " Hair Boiler ",
        description: " This lucky soul gets to boil various kinds of animal hair until it curls for later use. We know that burning hair smells terrible; try to imagine catching the aroma of hair boil soup all day, no thanks. "},
    { label: " Waste Station/Water Treatment Worker ",
        description: " Maybe more dirty than weird, but anytime someone has to deal with other peoples crap (literally) I think you can classify it as a weird job. Let us just take a minute to think about the things that go down our toilets and have a moment of silence for these brave men and women. "},
    { label: " Citrus Fruit Dyer ",
        description: " Have you ever passed by the lemons at the supermarket and though to yourself, damn that's some good looking citrus! Well it might be because there commercial farmers out there who dye the fruit a more vibrant color to hide the ripeness of the fruit. "},
    { label: " Crocodile Wrangler ",
        description: " Many of us are privy to this unusual occupation due to the late, great Steve Irwin, but no matter how accustomed we become to handling animals it will always be a little out there. A nice mix of danger and excitement for what many would consider low pay. "},
    { label: " Fortune Cookie Writer ",
        description: " Yes, we've all wondered who the heck writes those fortunes in English! Finishing a take-out Chinese meal isn't only full of MSG, but those delightfully witty pieces of advice that people are so quick to heed. "},
    { label: " Pet Detective ",
        description: " Another one we might have missed if it weren't for a film or television show. Ace Ventura, pet detective, displayed just how important this job is, especially when Dan Marino is in trouble! Personally I would've gone with a missing ad in the paper, but these folks are sure to find that furry member of the family. "},
    { label: " Cheese Sprayer ",
        description: " Don't worry; I am not talking about someone spraying chemicals on your cheese. This person is actually in charge of spraying either cheese or butter on popcorn. Yet another job that most people might have guessed was done by a machine, but how else would you engineer that perfect, hand crafted cheese coating on every kernel? "},
    { label: " IMAX Screen Cleaner ",
        description: " If you've ever seen an IMAX screen, these things are huge! But someone has to make sure that bad boy is crystal clear so we can travel through the Grand Canyon or explore the human body via a gigantic screen in a circular room. "},
    { label: " Chimney Sweeper ",
        description: " Here is another job which could be more on the dirty side. The unfortunate person partaking in this age old profession is sure to be covered in soot and ash by the end of the day. It a fact that around the turn of the twentieth century people use to use young children to chimney sweep because they were small enough to fit inside the tiny chimneys some structures used. Even poets like Blake and Kingsley have written about this one. I'm pretty sure (I hope) technology has brought this one up to date. "},
    { label: " Light Bender ",
        description: " Making neon lights seems like it would be a relatively easy job, but it requires a lot of precision and electrical work. Apparently if the lights don't have the proper thickness and shaping, they will amount to nothing more than broken glass. This job has to be quite lucrative in a town like Las Vegas. "},
    { label: " Odd Job Journalist ",
        description: " This writer gets actually paid money to write articles about other weird and odd jobs that exist. Maybe someday he'll find a real job of his own. Hey, wait a minute... "},
    { label: " Professional Whistler ",
        description: " Believe it or not this man whistles tunes and does it for a living. Allegedly this gentleman is well versed in several different genres of music. "},
    { label: " Fountain Pen Repairer ",
        description: " Honestly, I think most of us would have to be fairly wealthy and care a hell of a lot about our fountain pens to have them repaired rather than go buy another pen. "},
    { label: " Snake Milker ",
        description: " If you ever get bitten by a poisonous snake you'll be grateful these people know how to work with animals. They are responsible for getting the venom out of snakes to make the anti-venom. Be honest, which one of you thought that snakes had actual milk glands? "},
    { label: " Wrinkle Chasers ",
        description: " Nobody likes that crease that shoes get after about a month right below the toe line. Well wrinkle chasers make sure those leather crow's feet never appear on those shiny new shoes before they leave the factory. Now can we please find someone to invent something that keeps it that way? "},
    { label: " Rodeo Clowns ",
        description: " I know that I've always been fascinated with those Spaniards in Pamplona who risk their lives in the running of the bulls, but rodeo clowns do it for a living. You have to give them some respect though. Their theatrics not only takes guts, but you have to be fairly secure in your masculinity to do this covered in makeup. "},
    { label: " Cow Hoof Trimmer ",
        description: " Just like horseshoes, cows need some hoof maintenance too. These fine animals can have poor milk production, lameness, and decreased fertility if not properly groomed. Try to imagine giving a cow a pedicure. "},
    { label: " Chicken Sexer ",
        description: " Going through baby chicks and separating them according to sex. I hear this job is pretty easy, if you just play bad 80's music and set things up like a 5th grade dance, they separate themselves. "},
    { label: " Ostrich Babysitter ",
        description: " Apparently this guy gets to sit in a field full of ostrich and make sure that they didn't peck each other to death or get stolen. Any job where you can sit down, read a book and do absolutely no work is always a plus, but I have heard that these birds' behavior can get a little aggressive. "},
    { label: " Furniture Tester ",
        description: " Ever been sitting in your favorite chair or sofa and say to yourself, man I wish I could do this for a living. Well some really lucky human being actually tests out furniture for companies like La-Z-Boy. A new definition of the phrase 'couch potato' "},
    { label: " Cartoon People/Mascots ",
        description: " Remember when you went to Disneyworld for the first time when you were eight? You got to meet Mickey Mouse and Goofey! Well we all now know that those are real people in there and are aware of it, this is still a pretty weird job. "},
    { label: " Oyster Floater ",
        description: " They float oysters on a barge in running water until they are completely free of impurities, also a short term storage method. Sounds like a cranberry field full of oysters and I can imagine this isn't the cleanest job in the world. But if you enjoy the taste of these slimy shellfish, I'm sure you can sneak a lot in during your shift. "},
    { label: " Neck Skewer ",
        description: " Basically this job involves skewing the neck of beef halves with a steel rod after the head of the cow has been removed. 500 pound raw beef shish kabob anyone? "},
    { label: " Adult Store Attendant ",
        description: " One of the more harder-to-stomach professions, unless you're a pervert. Sooner or later we have to get into some nasty jobs. In this case the adult store worker not only takes care of the store, but has to clean up the booths where clientele 'test' the pornographic merchandise. Probably a good candidate for The Discovery Channel's popular program, and one heck of a way to apply that human services degree. "},
    { label: " Braille Translator ",
        description: " Someone has to modify all sorts of texts and convert them to Braille for the blind. This can include novels, music, textbooks, and brochures. There is nothing wrong with making things more accessible for the blind and this one sounds like it's a quite useful job, but it does sound tedious. "},
    { label: " Ski Slope Illustrator ",
        description: " Fortune Magazine has also done some investigating and sure enough there is someone out there who has to draw those trail maps on the ski slopes around the world. Fortune has also mentioned our next weird job... "},
    { label: " Dog Food Tester ",
        description: " Watch out guys, this gal is going to have some great breath in store for you. Just like any other meals, dog food needs to be inspected too. I suppose they can't use dogs to test the food so this profession requires a taste testing of such a delicious cuisine. "},
    { label: " Gum Buster ",
        description: " Have you ever sat in a park bench and had the misfortune of placing your hand in old gum? Well that's where these guys come in, removing gum that resides all over the place. "},
    { label: " Fantasy Broker ",
        description: " If you want your dreams to come true then talk to these folks. Their job is to make sure that if you want something, you get it. Kind of like a concierge of life. If I were in the business of making fantasies come to life, I think I'd charge quite a large amount. "},
    { label: " Golf Ball Diver ",
        description: " I know every time I hit the range, about three balls head into the water and I suspect it's the same way for most. These quasi-scubas get in there and find all those balls and probably clean them up for resale. If you want to scuba dive in the Mediterranean for living, this might be as close as you get. "},
    { label: " Whiskey Ambassador ",
        description: " Let's face it, this is every over 21 year old's dream job. You would be responsible for choosing only the finest whiskeys and teaching your clients the proper way to taste and admire the different attributes which this delicious liquor can possess. Sign me up! "},
    { label: " Nasty Stunt Producer ",
        description: " Perhaps you've tuned in to shows like Fear Factor which use insane stunts involving all sorts of insect and animal parts intended on grossing the contestants out. Well this profession's job is to research these insects and animals and make sure the stunts are safe and appropriate for the shows. Huge cockroach, bon appetit. "},
    { label: " Forest Fire Lookout ",
        description: " If you happen to be an extreme hermit who has very little time to do important things, there might be a national park out there that will pay you (a very low wage) to sit in a tower and make sure none of those pesky landscape altering fires occur. "},
    { label: " Weed Farmer ",
        description: " Don't get too excited all you slackers, that's not what I'm talking about."}
];  //end newOccupationArray


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
    + " " + [randomizeOccupations] + " " + " for 10 years, and you collect" + " " + [randomizeNouns] + ". " + " You enjoy attending " + " " + [randomizeConventions]+ " " +
    [randomizeAttending] + " and" + " " + "your" + " " + [nickCall] + " " + " because of your immense passion for" + " " +
    [randomizeHobbies] + ". " + " Your favorite type of food is" + " " + [randomizeAdjectives] + " " + [randomizeFood] + " " + "and you prefer to eat in the company of " + " " +
    [randomizePerson] + "."+ " " + " In order for your new identity to be believable, you MUST follow all instructions perfectly." + " "
    + " As per our agreement, you will be" + " " + [randomizePrepDesc]+ " " + [randomizePrepTime]+ " " + [randomizePrepLocation]+ " " + [randomizePrepDirection]
    + " " + "so we can collect the troll toll.  Upon arrival, please check under the bridge.";

//END BR GENERATOR