/**
 * Created by andrewkim on 5/12/16.
 */


/**
 * listen for the document to load for click handler
 */
$(document).ready(function () {
    $('body').click(function () {
        console.log("body clicked")
        getCarPhoto();
    })
});

/**
 * getCarPhotos - pulls car photos from flickr api 
 */
function getCarPhoto() {
    $.ajax({
        url: 'https://api.flickr.com/services/rest',
        method: 'get',
        data: {method: 'flickr.photos.search', api_key: '3c46705eb50f63815c46f96aa8ce171d', nojsoncallback: '1', text: 'car'},
        success: function (result) {
            console.log('request has been made for ', result);
        }
    })
}

