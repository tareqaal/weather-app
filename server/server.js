const express = require('express');
const cors = require('cors');
const https = require('https');

require('dotenv').config()

const app = express();
const port = 3001;
const key = process.env.SECRET_KEY // '08f08b38e271ba25fa156b8ade538418'


app.get('/weatherApi', (req, res) => res.send('Its raining!'));


const getByLatLon = (latitude, longitude, res, cityName) => {
    const excludeParts = 'minutely,hourly,alerts';
    
    https.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeParts}&units=metric&appid=${key}`, response => {
        if (response.statusCode === 401 ) {
            res.status(response.statusCode, "Unauthorized exception").json({code: response.statusCode, message: "you are unauthorized to send this request", error: true});
            return;
        }
        if (response.statusCode === 404 ) {
            res.status(response.statusCode, "Wrong Api request").json({code: response.statusCode, message: "Wrong geographical coordinates of the city (lon, lat)", error: true});
            return;
        }
        if (response.statusCode === 429 ) {
            res.status(response.statusCode, "Limited access").json({code: response.statusCode, message: "You made more requests than allowed", error: true});
            return;
        }
        else {
            response.on('data', (data) => {
                let result = JSON.parse(data);
                if (cityName != null) {
                    result.name = cityName
                }
                res.send(result);
            })
            .on('error', error => {
                res.status(response.statusCode).send(error)
            });        
        }
    });
}
app.get('/weatherApi/getByLatLong', (req, res) => {
    let latitude = req.query['lat'];
    let longitude = req.query['long'];

    getByLatLon(latitude, longitude, res)

});

app.get('/weatherApi/getByCity', (req, res) => {
    let city = req.query['city'];

    let result;

    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, response => {

        if (response.statusCode === 401 ) {
            res.status(response.statusCode, "Unauthorized exception").json({code: response.statusCode, message: "you are unauthorized to send this request", error: true});
            return;
        }
        if (response.statusCode === 404 ) {
            res.status(response.statusCode, "Wrong Api request").json({code: response.statusCode, message: "You specified wrong city name", error: true});
            return;
        }
        if (response.statusCode === 429 ) {
            res.status(response.statusCode, "Limited access").json({code: response.statusCode, message: "You made more requests than allowed", error: true});
            return;
        }
        else {
            response.on('data', (data) => {
                result = JSON.parse(data)
            })
            .on('end', () => {
                if (result != null) {
                    getByLatLon(result.coord.lat, result.coord.lon, res , result.name)
                }
            })
            .on('error', error => {
                res.status(response.statusCode).send(error)
            });        
        }
    });
});


app.listen(port, () => console.log(`Server is listening on port ${port}...`));

app.use(
    cors(),
)