const path = require('path');
const exp = require('express');

const dirpath = path.join(__dirname,'../public');

const app = exp();

//HTML used for static content hbs for dynamic content
app.set('view engine','hbs');
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
        title : 'ABOUT US',
        name : 'Sushovan Saha'
    });
})

app.get('/help',(req,res) =>
{
    res.render('help',
    {
        title: 'HELP',
        message: 'How can I help you ?'
    });
})

app.get('/weather',(req,res) =>
{
    res.send(
        {
            Forecast : 'Sunny',      //JSON
            Location : 'GUSKARA'

        });
})

app.listen(8080,() =>
{
    console.log("server is up on port 8080");
})