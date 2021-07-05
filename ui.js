class UI{
    constructor(){

        this.contentDiv = document.getElementById("content");
        this.inputField = document.getElementById("city");

    }
    clearInput(){
        this.inputField.value = "";
    }
    showForecastInfo(forecast){
        this.contentDiv.innerHTML = `

        <div class="city">${forecast.name},${forecast.sys.country}</div>
        <div class="temp">${Math.round(forecast.main.temp)}°C</div>
        <div class="desc">${forecast.weather[0].description}</div>
        <div class="minmax">${Math.round(forecast.main.temp_min)}°c / ${Math.round(forecast.main.temp_max)}°c</div>
     
        `;
    }
}