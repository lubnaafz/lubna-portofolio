import React from 'react'
import './project.css'
import siperpus from '../../assets/siperpus.png'
import sibusiness from '../../assets/sibusiness.png'
import cspost from '../../assets/cspost.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Project = () => {
  const projects = [
    { name: 'siperpus', dir: siperpus, link: 'https://siperpus-smp131jakarta.vercel.app/'},
    { name: 'sibusiness', dir: sibusiness, link: 'https://sibusinessa05.herokuapp.com/' },
    { name: 'cspost', dir: cspost, link: 'http://cspost.herokuapp.com/'}
  ];

  return (
    <section className='project__section' id='project'>
      <div className="project__container container">
        <div className="project__title">
        <AnimationOnScroll animateIn='animate__fadeIn'>
          <h2>Project</h2></AnimationOnScroll>
        </div>
        <div className="project__list">
          {projects && projects.map(project => 
          <AnimationOnScroll animateIn='animate__fadeInUp'>
            <div className="project__div">
              <img className="project__image" alt={project.name} src={project.dir}>
              </img>
              <div className="project__text">{project.name}
              </div>
              <a href={project.link}><button className='project__link' type="button">
                  Visit Project
              </button></a>
            </div>
          </AnimationOnScroll>
          )}
        </div>
      </div>
    </section>
  )
}

export default Project