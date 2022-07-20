const request = require('request');

const url = 'https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/37.8267,-122.4233'

request({url : url, json:true},(error, response) => {
  
    console.log(response.body.daily.data[0].summery + 'It is currently' + response.body.currently.temperature + 'degree out. There is' + response.body.currently.precipProbility + '% chance to rain')

});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1Ijoic2hhbGluaTk4IiwiYSI6ImNqejRsZDVlZDAybzEzZW56NXpxYTRwdG0ifQ.V_Oz9BJ972Q9Qvh9wMnpQQ&limit=1'

request({url:geocodeURL, json:true},(error, response)=> {
    const lalitude = response.body.Feature[1].center[1]

    const logitude = response.body.Feature[1].center[1]

    console.log(lalitude, logitude)
});