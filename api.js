let getcityNameInput = document.getElementById('search');
let btn = document.getElementById('button');
let result = document.getElementById('result');

const apikey = '5c424059f1f3012320f64ea44e51c174';


async function myFunction() {
    let cityNameInput = getcityNameInput.value;
    console.log("cityNameInput", cityNameInput);
    console.log("hello")
    

    if (cityNameInput.length > 0) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&units=metric&appid=${apikey}`;
        console.log("url", url);

        try {
            let response = await fetch(url);
            console.log("Response Status:", response.status);

            if (response.ok) {
                let data = await response.json();
                console.log("Weather Data:", data);
                result.innerHTML =`
                <div class="main mt-3 name" style="text-align: center;"><h1><strong>${data.name}</strong></h1></div>
                <div class="details row mt-5 mx-0" style="margin-top: 55px;">
                <div class="col">
                  <div
                    class="card"
                    style="height: 250px; border-radius: 10px; border: 1px rgb(255, 255, 255) solid; background-color: rgb(255, 251, 0)";
                  >
                    <h5 style="text-align: center;padding-top: 10px;">Temperature</h5>
                    <p style="padding-top: 20px;"><h1 style="text-align: center;">${data.main.temp} °C</h1></p>
                <div class="row mx-0 pt-3 px-2 justify-content-center">
                  <div class="col text-center">Max ${data.main.temp_max}°C</div>
                  <div class="col text-center">Min ${data.main.temp_max}°C</div>
                </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card"
                    style="height: 250px; border-radius: 10px; border: 1px rgb(255, 255, 255) solid; background-color: rgb(0, 255, 68)"
                  >
                    <h5 style="text-align: center;padding-top: 10px;">Wind</h5>
                    <p style="padding-top: 17px;"><h1 style="text-align: center;">${data.wind.speed} M/H</h1></p>
                    <h5 style="text-align: center;padding-top: 3px;">Humidity</h5>
                    <p><h1 style="text-align: center;">${data.main.humidity} </h1></p>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card"
                    style="height: 250px;border-radius: 10px;border: 1px rgb(255, 255, 255) solid; background-color: rgb(170, 0, 255)"
                  >
                    <h5 style="text-align: center;padding-top: 10px;">Description</h5>
                    <p style="padding-top: 20px;"> <h1 style="text-align: center;">${data.weather[0].description}</h1></p>
                  </div>
                </div>
                <div class="col d-none">
                  <div
                    class="card"
                    style="height: 250px;border-radius: 10px;border: 1px rgb(255, 255, 255) solid; background-color: rgb(200, 170, 215)"
                  >
                    <h5 style="text-align: center;padding-top: 10px;">Temperature</h5>
                  </div>
                </div>
              </div>`
            } else {
                console.error("Error:", response.statusText);
                alert(`${response.statusText}`);
                getcityNameInput.value = '';
            }
        } catch (error) {
            console.log(error);
            console.error("An error occurred during the API request:", error);

        }
    } else {
        alert(`Enter a city name`);
    }
}


btn.addEventListener("click", myFunction);
window.addEventListener('load',myFunction);


