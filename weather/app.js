const temp_value = document.querySelector('.temp-value');
const weather_detail = document.querySelector('.temp-details');
const icon = document.querySelector('.icon');
const location_desc = document.querySelector('.location');



window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.weatherapi.com/v1/current.json?key=d2c31dcf7773454ab80151852213006&q=${lat},${long}`;
            fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let weather_desc = data.current.condition.text;
                let temp = data.current.feelslike_c;
                let weather_icon = data.current.condition.icon;
                let place = data.location.tz_id;
                location_desc.textContent = place;
                icon.innerHTML = `<img src = ${weather_icon}>`
                weather_detail.textContent = weather_desc
                temp_value.textContent = temp+' c';
                
            });
        });
    }
    else{
        console.log('Not able to connect to the API');
    }
}) 