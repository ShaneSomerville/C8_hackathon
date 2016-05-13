/**
 * Created by somer on 5/13/2016.
 */
//GLOBAL VARIABLES
var region;
var firstName;
var lastName;
//END GLOBAL VARIABLES


//START DOC READY
$(document).ready(function(){
    get_identity();
    getCarPhoto();
    getHomePhoto();
    randomAgeGenerator();
    randomGenderGenerator();

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
            var div_1_paragraph=$('<p>').html(firstName+ ' '+ lastName+ ', '  + region);
            $('.div1').append(div_1_paragraph);
            initialize();
            randomOccupationGenerator();
            displayDiv4();
        },
        error: function(){
            console.log('call was unsuccessful')
        }
    })
}