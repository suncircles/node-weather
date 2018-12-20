const request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'chicago';
let apiKey = '9fa2b872f45b927a589057209b21e878';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body){
    if(err) {
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});