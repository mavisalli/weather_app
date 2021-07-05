// elementleri secme

const forecastForm = document.querySelector("#forecast-form");
const cityInput = document.querySelector("#city");
const content = document.querySelector("#content");
const forecast = new Forecast();
const ui = new UI();

eventListeners();

function eventListeners(){
    forecastForm.addEventListener("submit", getData);
}

function getData(e){
    let city = cityInput.value.trim();

    if(city=== ""){
        alert("Lütfen bir il giriniz...");
    }
    else {
        forecast.getForecastData(city)
        .then(response =>{
            if(response.message === "city not found"){
                //hata mesajı   
                console.log("Hata");
            }
            else {
                ui.showForecastInfo(response.forecast);
            }
        })
        .catch(err => console.log(err));
    }



    ui.clearInput();
    e.preventDefault();
}