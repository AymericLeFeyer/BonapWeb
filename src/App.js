import React from "react";

import logo from "./res/logo.png";
import flutter from "./res/flutter.png";
import firebase from "./res/firebase.png";

import "./components/App.css";
import "./bootstrap.min.css";
import "./styles/animate.min.css";

import Fade from "react-reveal/Fade";

import Wow from "react-wow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faCode } from "@fortawesome/free-solid-svg-icons";

import { Grid, Paper } from "@material-ui/core";

function Authors() {
  return (
    <div>
      <Fade top>
        <img className="logo" src={logo} alt="Logo de Bonap" />
      </Fade>
      <Fade right>
        <h3 className="authors">LE FEYER Aymeric</h3>
      </Fade>
      <Fade left>
        <h3 className="authors">CARRY Quentin</h3>
      </Fade>
    </div>
  );
}

function Title(props) {
  return (
    <Wow animation={props.anim}>
      <h1 className="title">
        <FontAwesomeIcon className="icone" icon={props.icon} />
        {props.title}
      </h1>
    </Wow>
  );
}

function Content(props) {
  return (
    <Wow animation={props.anim}>
      <p className="content">
        {props.content.map((c) => {
          return <p>{c}</p>;
        })}
      </p>
    </Wow>
  );
}

function Technos(props) {
  return (
    <Grid container spacing={3} className="tab-technos">
      {props.technos.map((techno) => {
        return (
          <Grid item xs>
            <Wow animation={techno.anim}>
              <Paper>
                <img src={techno.source} alt={techno.alt} />
              </Paper>
            </Wow>
          </Grid>
        );
      })}
    </Grid>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authors />
      </header>

      <Title title="Introduction" icon={faQuoteRight} anim="fadeInUp" />

      <Content
        anim="lightSpeedIn"
        content={[
          "Bonap est un gestionnaire de repas intelligent",
          "C'est avant tout le projet de fin d'étude de deux étudiants de licence informatique en 2020.",
        ]}
      />

      <Title title="Technologies" icon={faCode} anim="fadeInUp" />

      <Content
        anim="lightSpeedIn"
        content={[
          "Bonap est une application mobile utilisant le framework hybride de Google, Flutter.",
          "Nous sauvegardons les données des utilisateurs qui ont créé un compte grâce à Firebase.",
        ]}
      />

      <Technos
        technos={[
          {
            anim: "fadeInRight",
            source: flutter,
            alt: "Flutter",
          },
          {
            anim: "fadeInLeft",
            source: firebase,
            alt: "Firebase",
          },
        ]}
      />
    </div>
  );
}

export default App;
