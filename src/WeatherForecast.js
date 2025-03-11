import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
    return (
       <div className="weatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">
                    Mon
                </div>
                <span className="WeatgerForecast-temperature-max">
                    19                    
                </span>
                <span className="WeatgerForecast-temperature-min">
                    11
                </span>
            </div>
        </div>
       </div>
    )
}