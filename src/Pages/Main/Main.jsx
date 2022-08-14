import React from "react";
import "./Main.css";
import Navbar from "../../Components/Navbar/Navbar";
import Techlist from "../../Components/Techlist/Techlist";
import Projects from "../../Components/Projects/Projects";
import Timeline from "../../Components/Timeline/Timeline"
export default function Main() {
  //Attachments
  const resumeToDownload = require("../../Attachments/Ezequiel_Mag_CV.pdf");
  //Images
  const profileImage = require("../../img/profile-pic.png");

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <section id="s-home" className="s-home">
        <div className="home">
          <div className="container-text">
            <h1 className="text">
              Olá, sou <br />
              <span className="home-title"> Ezequiel Magalhães.</span>
            </h1>
            <h2 className="typewriter">Desenvolvedor Front-End</h2>
          </div>
          <div className="container-techs">
            <Techlist automaticSlider={true} />
          </div>
        </div>
      </section>
      <section id="s-about" className="s-about">
        <div className="about">
          <div className="container-info">
            <div className="container-profile-image"> 
              <img src={profileImage} alt="profile" />
            </div>
            <div className="container-about-text">
              <h1 className="title-about"> Quem sou</h1>
              <p className="about-text">
                &nbsp; &nbsp; &nbsp;Estudo e pratico programação a mais de 4
                anos, sou um programador apaixonado, estudante de Sistemas de
                Informação e me considero apto para realizar o serviço de um
                desenvolvedor júnior, com ampla capacidade de trabalho em
                equipe, com conhecimento em Git.
                <br />
                &nbsp; &nbsp; &nbsp;Sou Formado no curso técnico de Informática
                pelo IFMA e já fui bolsista PIBIC para desenvolver projeto
                voltado para crianças e adolescentes visando conscientizá-las
                sobre o meio ambiente. Atuei neste projeto como Tech Lead, pondo
                a mão na massa, e liderando um time de desenvolvedores. Minhas
                tecnologias mais praticadas são JavaScript, HTML, CSS, React.
                Também tenho projetos já feitos em React e conhecimento básico
                de Docker, porém sempre posso lidar com novas tecnologias, com
                também alto conhecimento de inglês e me sinto totalmente
                confortável dialogando com alguém do idioma.
              </p>
              <div className="download-cv">
                <a
                  className="cv"
                  href={resumeToDownload}
                  target="blank"
                  download
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s-projetcs" className="s-projects">
        <div className="projects">
          <Projects />
        </div>
      </section>
      <section id="s-skills" className="s-skills">
        <div className="skills">
          <h2 className="skills-title">Conhecimentos</h2>
          <div className="skill-image">
            <Techlist automaticSlider={false} /> 
          </div>
        </div>
      </section>
      <section id="s-student-education" className="s-student-education">
        <div className="student-education">
          <h2 className="timeline-title">Formações</h2>
          <Timeline/>
        </div>
      </section>
    </div>
  );
}
