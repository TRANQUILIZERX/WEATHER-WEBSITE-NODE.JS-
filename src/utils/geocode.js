const request = require('request');

const geocode = (address,callback) =>
{
    const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3VzaG92YW45NSIsImEiOiJjanp0bnp3cGkwN2hrM25xcW93MTNyZmUyIn0.EJyuOvsRE6vSrshx3iaIWA';

    request({url: geourl, json: true},(error,response) =>
    {
    
        if(error)
        {
            callback("Can not connect to server...!",undefined);
        }
        else if(response.body.features.length === 0)
        {
            callback("Can not find Location...!!",undefined);
        }
        else
        {
            callback(undefined,
                {
                place: response.body.features[0].place_name, 
                longitude: response.body.features[0].center[1], 
                latitude: response.body.features[0].center[0]
                })
        }
    })

}

module.exports = geocode