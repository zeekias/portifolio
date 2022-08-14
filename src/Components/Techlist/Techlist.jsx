import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Techlist.css";

export default function Techlist({ automaticSlider }) {
  const cssImage = require("../../img/css.png");
  const htmlImage = require("../../img/html.png");
  const javaScriptImage = require("../../img/javascript.png");
  const reactImage = require("../../img/react.png");
  const typeScriptImage = require("../../img/typescript.png");

  const techImages = [
    {
      techName: "JavaScript",
      imageUrl: javaScriptImage,
      techInfo: "JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.",
      percentage: 8,
      color: '#f0db4e'
    },
    {
      techName: "TypeScript",
      imageUrl: typeScriptImage,
      techInfo: "o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JS. Por meio dele é possível definir a tipagem estática, parâmetros e retorno de funções.",
      percentage: 4,
      color: '#007acd',
    },
    {
      techName: "ReactJs",
      imageUrl: reactImage,
      techInfo: "React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface).",
      percentage: 7,
      color:'#64defc'
    },
    {
      techName: "HTML",
      imageUrl:  htmlImage,
      techInfo: "Trata-se de uma linguagem de marcação para desenvolver páginas para a internet, fornecendo informações para usuários, navegadores e mecanismos de busca.",
      percentage: 9,
      color: '#f16528'
    },
    {
      techName: "CSS",
      imageUrl: cssImage,
      techInfo: "É a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML, por exemplo.",
      percentage: 9,
      color: '#35a9de'
    }
  ];

  const [currentTech, setCurrentTech] = useState(techImages[0]);

  function handleChangeTechImage(go){
    const indexTechImages = techImages.findIndex(
      (img) => img.imageUrl === currentTech.imageUrl
    );
    go ? 
    setCurrentTech(
      techImages.length - 1 === indexTechImages
        ? techImages[0]
        : techImages[indexTechImages + 1]
    ) : 
    setCurrentTech(
      0 === indexTechImages
        ? techImages[techImages.length-1]
        : techImages[indexTechImages - 1]
    ) 
  }
  useEffect(() => {
    if (automaticSlider) {
      clearTimeout();
      const timerToChangeTheTech = setTimeout(() => {
        handleChangeTechImage(true);
      }, 2000);
    };
  }, [currentTech]);

  return (
    <div className="tech-list">
      {automaticSlider ? <>
      <div id="tech-image">
        <img
          className="tech-image java-script-image tech-selected"
          src={currentTech.imageUrl}
          alt="tech.jpg" />
      </div></> 
      :
      <>
      <div className="tech-content">
      <div className="arrow-btn" onClick={() => handleChangeTechImage(false)}>&lsaquo;</div>
      <div id="tech-image">
        <img
          className="tech-image java-script-image tech-selected"
          src={currentTech.imageUrl}
          alt="tech.jpg" />
      </div>
      <div className="arrow-btn" onClick={() => handleChangeTechImage(true)}> &rsaquo; 
      </div>
      </div>
      <div className="tech-title-and-description"> 
        <h2 className="title">{currentTech.techName}</h2>
        <p>{currentTech.techInfo}</p>
      </div>
      <div className="my-skill"> 
        <h3 className="my-skill-title"> Minha Skill</h3>
        <CircularProgressbar
        value={currentTech.percentage*10} text={`${currentTech.percentage}`}
        styles={buildStyles({
          textColor: "white",
          pathColor: `${currentTech.color}`,
          trailColor: ""
        })}
        />
      </div>
      </>}
    </div>
  );
}
