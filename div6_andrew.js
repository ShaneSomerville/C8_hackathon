/**
 * Created by andrewkim on 5/12/16.
 */


/**
 * listen for the document to load for click handler
 */
$(document).ready(function () {
    $('.div6').click(function () {
        console.log("div6 clicked");
        getCarPhoto();
        getHomePhoto();
    })
});

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
            text: 'car',
            format: 'json'
        },
        success: function (result) {
            console.log(result);
            console.log('request has been made for ',  result.photos.photo[0].id);

            var all_photo = result.photos.photo;
            var photo_id = all_photo[0].id;
            var farm_id = all_photo[0].farm;
            var secret_id = all_photo[0].secret;
            var server_id = all_photo[0].server;

            console.log(photo_id, farm_id, secret_id);
            var image_src = 'https://farm' + farm_id +'.staticflickr.com/'
                + server_id +'/'+ photo_id +'_'+ secret_id +'.jpg';
            console.log(image_src);

            var car_image = $('<img>').attr('src', image_src).addClass('car_img');

            $('.div6').append(car_image);
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
            text: 'car',
            format: 'json'
        },
        success: function (result) {
            console.log(result);
            console.log('request has been made for ',  result.photos.photo[0].id);

            var all_photo = result.photos.photo;
            var photo_id = all_photo[0].id;
            var farm_id = all_photo[0].farm;
            var secret_id = all_photo[0].secret;
            var server_id = all_photo[0].server;

            console.log(photo_id, farm_id, secret_id);
            var image_src = 'https://farm' + farm_id +'.staticflickr.com/'
                + server_id +'/'+ photo_id +'_'+ secret_id +'.jpg';
            console.log(image_src);

            var car_image = $('<img>').attr('src', image_src).addClass('car_img');

            $('.div6').append(car_image);
        }
    })
}
