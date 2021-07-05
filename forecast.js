class Forecast{
    constructor(){
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=";
        this.appid = "07fb22d07fb563a68aade1716da7cd14";
        this.units = "metric";
        this.lang = "tr";
    }

    async getForecastData(city){
        const responseForecast = await fetch(this.url + city +"&appid="+ this.appid+ "&units=" + this.units + "&lang=" + this.lang);
        const forecastData = await responseForecast.json();
        
        return {
            forecast: forecastData
        }
    }
}