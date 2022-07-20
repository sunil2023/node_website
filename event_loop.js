let request = require('request');

let apiKey = "6adbda2fadd60fa1e70dd0ea2357350b";

const CITIES = [
    "Kolkata",
    "Bangalore",
    "Allahbad",
    "Delhi"
];

const city = CITIES[Math.floor(Math.random()* CITIES.length)];

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body){

    console.log('Fetching the weather !');

    if(err){
        console.log("There was error in getting the weather")
    }
    else{
        let weather = JSON.parse(body);

        let message = `It's ${weather} degrees in ${weather.name}! `;
        console.log(message)
    }
    greet();
});

function greet(){
    console.log("Weather Fatched !!");
}