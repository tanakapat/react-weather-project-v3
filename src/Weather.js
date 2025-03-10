import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css"

export default function Weather (props) {
    const [weatherData, setwWatherData] = useState({});  
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse (response) {   
        console.log(response.data)         
        setwWatherData({   
            ready: true,     
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,     
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
            city: response.data.city,
            country: response.data.country,
        });        
    }

    function search() {
        const apiKey = "bo5101a34b5992391t9e44f085355a8b";        
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);       
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">       
                <form onSubmit={handleSubmit}>                    
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city.."
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
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
                <WeatherInfo data={weatherData}/>                  
            </div>
        )} else {
            search();
            return "Loading"
        }    
    }
