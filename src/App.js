import React from "react";

import logo from "./res/logo.png";
import flutter from "./res/flutter.png";
import firebase from "./res/firebase.png";
import playStore from "./res/playStore.png";
import instagram from "./res/instagram.png";

import "./components/App.css";
import "./bootstrap.min.css";
import "./styles/animate.min.css";

import Fade from "react-reveal/Fade";

import Wow from "react-wow";

import Tilt from "react-tilt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faCode,
  faList,
  faSignInAlt,
  faUserFriends,
  faPlus,
  faCalendar,
  faShoppingCart,
  faSave,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import { Grid } from "@material-ui/core";

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
    <Wow animation="pulse">
      <div className="paperTitle">
        <h1 className="title">
          <FontAwesomeIcon className="icone" icon={props.icon} />
          {props.title}
        </h1>
      </div>
    </Wow>
  );
}

function Content(props) {
  return (
    <Wow animation="fadeInUp">
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
              <img src={techno.source} alt={techno.alt} />
            </Wow>
          </Grid>
        );
      })}
    </Grid>
  );
}

function Link(props) {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <a target="_blank" href={props.link} rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} className="imgLink" />
      </a>
    </Tilt>
  );
}

function Feature(props) {
  return (
    <Grid item xs={4} className="buttonFeature">
      <div className="textFeature">{props.text}</div>
      <Tilt className="Tilt" options={{ max: 50 }}>
        <FontAwesomeIcon className="iconFeature" icon={props.icon} />
      </Tilt>
    </Grid>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authors />
      </header>
      <Title title="Introduction" icon={faQuoteRight} />
      <Content
        content={[
          "Bonap est une application mobile qui permet de gérer ses menus à la semaine.",
          "C'est avant tout le projet de fin d'étude de deux étudiants de licence informatique en 2020.",
        ]}
      />
      <Title title="Fonctionalitées" icon={faList} />
      <Grid container spacing={2}>
        <Feature text="Création d'ingrédients et de repas personnalisés" icon={faPlus} />
        <Feature text="Gestion du menu pour plusieurs semaines à l'avance" icon={faCalendar} />
        <Feature text="Création automatique d'une liste de course" icon={faShoppingCart} />
        <Feature text="Sauvegarde de vos menus sur le cloud" icon={faSave} />
        <Feature text="Système de connexion avec prise en charge de l'authentification Google" icon={faSignInAlt} />
        <Feature text="Thème sombre, mode végétarien, et bien plus !" icon={faCog} />
      </Grid>
      <Title title="Connexion" icon={faSignInAlt} />
      <Content
        content={[
          "Connectez vous a Bonap en vous creant un compte",
          "Vous pouvez aussi utiliser votre compte Google !",
          "Cela vous permettra de sauvegarder vos repas et ingredients sur le cloud",
        ]}
      />
      <Title title="Technologies" icon={faCode} />
      <Content
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
      <Title title="Retrouve nous !" icon={faUserFriends} />
      <Content
        anim="lightSpeedIn"
        content={[
          "Bonap est disponible sur le Play Store",
          "L'application possede egalement sa page Instagram",
        ]}
      />
      <Grid container className="links">
        <Grid item xs>
          <Link
            link="https://www.instagram.com/itsbonap/?hl=fr"
            alt="Instagram"
            src={instagram}
          />
        </Grid>
        <Grid item xs>
          <Link
            link="https://play.google.com/store/apps/details?id=com.stelapix.bonap&hl=fr"
            alt="Play Store"
            src={playStore}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
