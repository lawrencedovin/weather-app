"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Please enter a City Name');
    }
    var http = new XMLHttpRequest();
    var apiKey = '57b96923992ba0c3e387c02d4ae75fe1';
    var url = 'http:api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
        } else if (http.readyState !== XMLHttpRequest.DONE) {
            alert('Something went wrong');
        }
    };
}

