import React from "react";
import "./Timeline.css";
export default function Timeline() {
    const timeLine = [
        {
            course: "Curso de React.Js e Next.Js (Intermediário e Avançado)",
            date: "2022 (Cursando)",
            place: "Udemy",
            info:"Aprenda ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript."
        },
        {
            course: "Sistemas de Informação",
            date: "2021(Cursando)",
            place: "IFMA",
            info:"Estudando sobre como as informações e os dados são recebidos, manipulados e devolvidos através dos computadores e dos softwares. Aprendendo a criar e gerenciar programas e softwares, bem como modificá-los usando linguagens de programação, bibliotecas, frameworks e bancos de dados.1"
        },
        {
            course: "Técnico em Informática",
            date: "2018 - 2021",
            place: "IFMA",
            info:"Tem como objetivo desenvolver a capacidade e as habilidades do estudante no que diz respeito ao desenvolvimento, ao aperfeiçoamento e à correção de tecnologias.Por meio de aulas práticas e teóricas, o aluno aprende a arquitetar estruturas de softwares e sistemas, além de estudar as mais variadas e modernas linguagens da programação, seguindo sempre as normas técnicas vigentes."
        }
        
    ]
  return (
    <div className="timeline-container">
      <ul className="timeline">
        {timeLine.map((point,index)=>{
            return(
            <li key={index} className="time-point">
            <div className="time-heading">
              <p className="date">{point.date}</p>
              <p className="course"> {point.course} </p>
              <p className="place">{point.place}</p>
            </div>
            <div className="time-info"><p className="info">{point.info}</p> </div>
          </li>)
        })}
      </ul>
    </div>
  );
}
