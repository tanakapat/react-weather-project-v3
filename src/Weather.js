import React from "react";
import "./Weather.css"

export default function Weather () {
    return (
        <div className="Weather">           
            <div className="col-9">
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

            </div>
            <h1>Stockholm</h1>
            <ul>
                <li>Sunday 1:08</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy"></img>
                    4° C
                </div>
                <div className="col-6">
                <ul>
                    <li>Precipitation</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                </ul>
                </div>
            </div>
        
        </div>
    )
}