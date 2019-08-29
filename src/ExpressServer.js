const exp = require('express');

const app = exp();

//creating 4 routes ==> app.get()

app.get('',(req,res) => 
{
    res.send('<h1>WELCOME</h1>'); //text response will be shown in the browser
})

app.get('/help',(req,res) =>
{
    res.send('<h1>HELP PAGE</h1>'); //HTML
    
})

app.get('/about',(req,res) =>
{
    res.send('<h1>ABOUT</h1>');
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