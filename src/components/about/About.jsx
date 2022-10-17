import React from 'react'
import './about.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const About = () => {
  return (
    <section className='about__section' id='about'>
      <div className="about__container container">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="about__img_bg">
          <div className="about__img"></div>
        </div>
      </AnimationOnScroll>
        <div className="about__me">
        <AnimationOnScroll animateIn='animate__fadeInDownBig'>
          <h2>About Me</h2></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUpBig">
          <div className="about__subdesc">
            <p>I'm</p> <span className='about__name'><p>Lubna Fairuz Zafira</p></span>
          </div>
          <p className='about__desc'>Fresh Graduate of Information System at University of Indonesia. Highly interested in Business and Website Development. Clear understanding of IT Business Process. Proven experience developing website using HTML, CSS, React, JavaScript, Figma, and Git. Therefore currently looking for a job as a Frontend Developer.</p>
        </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}

export default About