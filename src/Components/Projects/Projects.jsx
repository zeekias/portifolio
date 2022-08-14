import React, {useState} from "react";
import "./Projects.css";
export default function Projects() {
  const netflixProjectImage = require("../../img/netflix-project.jpg");
  const PokemonProjectImage = require("../../img/pokemon-project.jpg");
  const PokemonSliderProjectImage = require("../../img/pokemon-slider-project.jpg");
  const [show, setShow] = useState(true);
  function showOnlyProjectsReact(){
    setShow(!show);
  }
  return (
    <div className="container-projects">
      <div className="title-and-filter">
      <h1 className="projects-title"> Portifólio </h1>
      <label className="filter">
        <input className="input-slider" type="checkbox" name="filter" id="filter" onChange={()=>showOnlyProjectsReact()} value={show} />
        <span className="slider"> React </span>
      </label>
      </div>
      <div className="content-projects"> 
        <ul className="projects-list">
          <li className="project-container">
            <div className="guess-the-pokemon">
              <a href="https://guess-pokemon-game.web.app/" target="blank">
                <img className="project" src={PokemonProjectImage} alt="Guess-the-pokemon.jpg" />
              </a>
            </div>
          </li>
          <li className="project-container">
            <div className="netflix-clone">
              <a href="https://projeto-netflix-clone.web.app/" target="blank">
              <img
                className="project"
                src={netflixProjectImage}
                alt="netflix-project.jpg"
                />
                </a>
            </div>
          </li>
          {show && <li className="project-container">
            <div className="pokemon-slider">
              <a href="https://zeekias.github.io/projeto-pokemon-slider/" target="blank">
              <img className="project" src={PokemonSliderProjectImage} alt="Pokemon-slider.jpg" />
              </a>
            </div>
          </li>}
        </ul>
      </div>
      <div className="github-repository-container">
        <a className="github-repository" href="https://github.com/zeekias" target="_blank">REPOSITÓRIOS NO GITHUB</a>
      </div>
    </div>
  );
}
