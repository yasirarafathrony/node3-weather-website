const request = require ('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=f184aa1c4c5a05f70c6c7e523461512f&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            //
            callback(undefined, body.current.weather_descriptions[0]+ ". It is currently " + body.current.temperature + " fahrenheit out. It feels like " + 
             body.current.feelslike + " fahrenheit out.")
        }

    })

}



module.exports = forecast