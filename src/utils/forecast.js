const request = require('request');

forecast = (data,callback) =>
{
    const url = 'https://api.darksky.net/forecast/a507c5fcb255510300d52ccb607a4e01/'+data.longitude
    +','+data.latitude+'?units=si';

    request({url: url, json: true},(error,response) =>
    {
        if(error)
        {
            callback("Can not connect to server...!",undefined);
        }
        else if(response.body.error)
        {
            callback("Can not find Server",undefined);
        }
        else
        {
            callback(undefined, ' It is currently ' + 
            response.body.currently.temperature + ' degress out. There is a ' + 
            response.body.currently.precipProbability*100 + '% chance of rain.')
        }
    })


}

module.exports = forecast