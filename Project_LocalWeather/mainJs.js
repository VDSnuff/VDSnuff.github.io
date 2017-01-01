var currentLatitude;
var currentLongitude;
var weatherURL;


var getWeater = function() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "fJ2lAj6zWDmshtWgy3eeZxqS37vpp1HxRCSjsnxUyd8gIhvHMw",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        url: weather,
        success: function(response) {
            var resp = JSON.parse(response);
            //Location
            $('#mainContainer').html('<div >' + resp['query']['results']['channel']['location']['city'] + '</div>');
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['location']['region'] + '</p>');
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['lastBuildDate'] + '</p>');
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['location']['country'] + '</p>');
            //End Location

            //Wind
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['wind']['speed'] + '</p>');
            //End Wind

            //Atmosphere
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['humidity'] + '</p>');
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['pressure'] + '</p>');
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['visibility'] + '</p>');
            //End Atmosphere

            //Astronomy
            $('#mainContainer').append('<p>' + resp['query']['results']['channel']['item']['condition']['temp'] + '</p>');
            //End astronomy

            //Forecast 
            //Row One
            for (var i = 0; i < 4; i++) {
                $('#forecastContainerFirstRow').append('<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">' + '<p>' + resp['query']['results']['channel']['item']['forecast'][i]['date'] + '</p>' + '<p>' + 'high: ' + resp['query']['results']['channel']['item']['forecast'][i]['high'] + '</p>' + '<p>' + 'low: ' + resp['query']['results']['channel']['item']['forecast'][i]['low'] + '</p>' + '<p>' + resp['query']['results']['channel']['item']['forecast'][i]['text'] + '</p>' + '</div>');
            }
            //Row One End
            //Row Two
            for (var j = 4; j < 8; j++) {
                $('#forecastContainerSecondRow').append('<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">' + '<p>' + resp['query']['results']['channel']['item']['forecast'][j]['date'] + '</p>' + '<p>' + 'high: ' + resp['query']['results']['channel']['item']['forecast'][j]['high'] + '</p>' + '<p>' + 'low: ' + resp['query']['results']['channel']['item']['forecast'][j]['low'] + '</p>' + '<p>' + resp['query']['results']['channel']['item']['forecast'][j]['text'] + '</p>' + '</div>');
            }
            //Row Two End
            //Row Third
            /*for (var e = 8; e < 10; e++) {
                $('#forecastContainerThirdRow').append('<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-md-offset-1 col-lg-offset-1">' + '<p>' + resp['query']['results']['channel']['item']['forecast'][e]['date'] + '<p>' + 'high: ' + resp['query']['results']['channel']['item']['forecast'][e]['high'] + '</p>' + '<p>' + 'low: ' + resp['query']['results']['channel']['item']['forecast'][e]['low'] + '</p>' + '</p>' + '<p>' + resp['query']['results']['channel']['item']['forecast'][e]['text'] + '</p>' + '</div>');
            }*/
            //Row Third End
            //Forecast End
        }
    });
};
$(document).ready(function() {
    
    var spinner = '<i id="mySpinner" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>';
    $('#mainContainer').html(spinner);
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            currentLatitude = position.coords.latitude;
            currentLongitude = position.coords.longitude;
            weather = 'https://simple-weather.p.mashape.com/weatherdata?lat=' + currentLatitude + '&lng=' + currentLongitude;
             getWeater();
        });
    }
    // $('#test').on('click', getWeater);
    //$('#postTwitter').on('click', postTwitter);
});