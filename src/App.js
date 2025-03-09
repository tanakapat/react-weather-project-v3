import React from "react"
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm"/>
          <footer>
            Coded by Patricia Tanaka and it is open sourced on {" "}
              <a href="https://github.com/tanakapat/react-weather-project-v3" rel="noreferrer" target="_blank" >
              Github
              </a>
          </footer>
      </div>
    </div>
  );
}
