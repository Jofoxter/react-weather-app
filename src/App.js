import React from "react";
import Weather from "./weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://polite-cassata-f5e2ec.netlify.app/
        "
            target="_blank"
            rel="noreferrer"
          >
            Giorgia Francesca Costantino{" "}
          </a>
          and is {""}
          <a
            href="https://github.com/Jofoxter/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
