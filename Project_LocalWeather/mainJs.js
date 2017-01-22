var currentLatitude;
var currentLongitude;
var weatherURL;
var whetherIconType;

function setWhetherIcon(){
  /*  switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}*/
    //return whetherIconType = ...;
}

// Make something like temperature converter based on response parameters(vise-versa)!!!
function convertToF(celsius) {
  var fahrenheit = celsius*(9/5) + 32;
  return fahrenheit;
}

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
            //Main Container
            //Arrow left
             $('#mainContainer').html('<div class="col-xs-1 col-sm-1 col-md-2 col-lg-2">' + '<img id="arrowLeft" src="weatherPack/left-chevron.svg" alt="<<ArrowLeft">' +'</div>');
            //End
            
            //Location
            $('#mainContainer').append('<div id="internalContainer" class="col-xs-10 col-sm-10 col-md-8 col-lg-8">' + '<p>' + resp['query']['results']['channel']['location']['city'] + '</p>' + '</div>');
            //$('#mainContainer').append('<p>' + resp['query']['results']['channel']['location']['region'] + '</p>');
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['lastBuildDate'] + '</p>');
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['location']['country'] + '</p>');
            //End Location
            $("#internalContainer").append('<img src="weatherPack/sunny.svg" height="100">');
            //Wind
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['wind']['speed'] + '</p>');
            //End Wind

            //Atmosphere
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['humidity'] + '</p>');
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['pressure'] + '</p>');
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['atmosphere']['visibility'] + '</p>');
            //End Atmosphere

            //Temp
            $('#internalContainer').append('<p>' + resp['query']['results']['channel']['item']['condition']['temp'] + '</p>');
            //End temp
            //Arrow right
            $('#mainContainer').append('<div class="col-xs-1 col-sm-1 col-md-2 col-lg-2">' + '<img id="arrowRight" src="weatherPack/right-chevron.svg" alt="ArrowRight>>">' +'</div>');
            //End Arrow
            //End Main Container
            
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
    //Spiner
    var spinner = '<i id="mySpinner" class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>';
    $('#mainContainer').html(spinner);
    //End spiner
    
    //Get current location + Initiate getWeather request
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            currentLatitude = position.coords.latitude;
            currentLongitude = position.coords.longitude;
            weather = 'https://simple-weather.p.mashape.com/weatherdata?lat=' + currentLatitude + '&lng=' + currentLongitude;
            getWeater();
        });
    }
    //End
    
    // $('#test').on('click', getWeater);
    //$('#postTwitter').on('click', postTwitter);
});