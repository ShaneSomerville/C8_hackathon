/**
 * Created by somer on 5/12/2016.
 */
$(document).ready(function(){
    get_identity();
});

function get_identity(){
    $.ajax({
        method: 'get',
        datatype: 'json',
        url: 'http://uinames.com/api/',
        success: function(result){
            var FirstName=result.name;
            var LastName=result.surname;
            var Gender=result.gender;
            var Region=result.region;
            var div_1_paragraph=$('<p>').html(FirstName+ ' '+ LastName+ ', '+ Gender+ ', '+ Region);
            $('.div1').append(div_1_paragraph);
        },
        error: function(){
            console.log('call was unsuccessful')
        }
    })
}