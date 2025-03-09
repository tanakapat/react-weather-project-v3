import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather () {
    const [weatherData, setwWatherData] = useState({});   
    
    function handleResponse (response) {   
        console.log(response.data)     
        setwWatherData({   
            ready: true,     
            date: "Sunday 18:25",
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,     
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
            city: response.data.city,
            country: response.data.country,
        });        
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">       
                <form>                    
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city.."
                                className="form-control"
                                autoFocus="on"              
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>            
                <h1>{weatherData.city}, {weatherData.country}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row-mt-3">
                    <div className="row">
                        <div className="col-6">
                            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
                            <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                            <span className="unit">°C</span>
                        </div>
                        <div className="col-6">
                        <ul>                            
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/h</li>
                        </ul>
                        </div>
                    </div>   
                </div>
            </div>
        )} else {
        const apiKey = "bo5101a34b5992391t9e44f085355a8b";
        let city = "Stockholm"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading"
    }
}