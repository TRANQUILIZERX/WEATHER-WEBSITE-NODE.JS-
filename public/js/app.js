console.log("Client side Javascript is loaded");

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const message1 = document.querySelector('#text1');
const message2 = document.querySelector('#text2');
const message3 = document.querySelector('#text3');

message1.textContent = 'Know Weather Forecast';


weatherForm.addEventListener('submit', (event) =>
{
    event.preventDefault();  //prevent the page from refreshing automatically
    
    const location = search.value;

    fetch('http://127.0.0.1:8080/weather?search='+location).then((response) =>
    {
        message2.textContent = '';
        message3.textContent = '';
        response.json().then((data) =>
        {
            if(data.error)
            {
                message1.textContent = data.error;
            }
            else
            {
                message1.textContent = data.Location.place;
                message2.textContent = 'Longitude: '+data.Location.longitude+', '+'Latitude: '+data.Location.latitude;
                message3.textContent = data.Forecast;
            }

        })
    })

})