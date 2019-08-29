const path = require('path');
const exp = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

console.log(__dirname)

//define paths for Express config
const dirpath = path.join(__dirname,'../public');
const temppath = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partials'); 

const app = exp();
const port = process.env.PORT || 8080; // fetching port from env variable for local m/c 8080

//setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',temppath);   //to use custom directory instead of 'views'
hbs.registerPartials(partialpath);

//setup static directory to serve
app.use(exp.static(dirpath));

app.get('',(req,res) =>
{
    res.render('index',
    {
        title : 'Weather App',
        name : 'Sushovan Saha'
    });
})

app.get('/about',(req,res) =>
{
    res.render('about',
    {
        title : 'ABOUT',
        name : 'Sushovan Saha'
    });
})

app.get('/help',(req,res) =>
{
    res.render('help',
    {
        title: 'HELP',
        message: 'How can I help you ?',
        name : 'Sushovan Saha'
    });
})

app.get('/weather',(req,res) =>
{
    if(!req.query.search)
    {
        return res.send(
            {
                error: 'You should provide a location name.'
            }
        )
    }
    else
    {
        const location = req.query.search;
        geocode(location,(error,data) =>
        {
            if(error)
            {

                return res.send({error}); 
            }
            
            forecast(data,(error,wforecast) =>
            {
                if(error)
                {
                    return res.send({error});
                }
                
                res.send(
                {
                    Location : data,
                    Forecast : wforecast
                })

            })

        })


    }
})

app.get('*',(req,res) =>
{
    res.render('notfound',
    {
        title: '404',
        name: 'DEVIL',
        errormessage: 'Ooops..Page not Found...!!'
    }

    );

})

app.listen(port,() =>
{
    console.log("server is up on port: "+port);
})

/* // for local host
app.listen(8080,() =>
{
    console.log("server is up on port 8080");
})*/