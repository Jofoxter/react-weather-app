import React from "react";
import Weather from "./weather.js";
import "./App.css";
import Image from "./GC_Logo_Vertical_FullCol.png";
import Img from "./sunlight-bursts-through-clouds-to-set-hill-and-flowers-ablaze.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a
              href="https://www.giorgiacostantino.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo w-50 mx-auto d-block"
                src={Image}
                alt="logo"
              />{" "}
            </a>{" "}
          </div>
        </div>
        <br />
        <br />
        <h1 className="title text-center">Weather Forecast</h1>
        <br />
        <h2 className="enmessage text-center">
          Check the weather but do not forget that every day is special because
          over the clouds there is always a blue sky,{" "}
          <div>and a wonderful sun is shining for you.</div>
          <br />
          <div>Today make the day a great day, for you and others!</div>
        </h2>
        <br />
        <Weather defaultCity="Milan" />
        <br />
        <div className="row">
          <div className="col-md-12">
            <img
              className="wximage w-100 mx-auto d-block"
              src={Img}
              alt="wximage"
            />{" "}
          </div>
        </div>
        <br />
        <h2 className="itmessage text-center">
          Controlla il meteo ma non dimenticare che ogni giorno è speciale
          perché sopra le nuvole c'è sempre un cielo azzurro{" "}
          <div>e un sole meraviglioso splende per te.</div>
          <br />
          <div>
            Oggi rendi la giornata una grande giornata,
            <div>per te e per gli altri!</div>
          </div>
        </h2>
        <hr></hr>
        <footer className="footer text-center">
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
