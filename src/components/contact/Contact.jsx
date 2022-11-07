import React from 'react'
import './contact.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { BsYoutube } from 'react-icons/bs'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Contact = () => {
  return (
    <section className='contact__section' id='contact'>
      <div className="contact__container">
        <div className="contact__title">
        <AnimationOnScroll animateIn='animate__fadeIn'>
          <h2>Contact Me</h2></AnimationOnScroll>
        </div>
        <div className="contact__desc">
          <p>Feel free to connect with me below</p>
        </div>
        <AnimationOnScroll animateIn='animate__slideInDown'>
        <div className="contact__info">
          <div className="contact__nohp">
            <h3>+628979738428</h3>
          </div>
          <div className="contact__email">
            <h3>lubnafairuzzafira@gmail.com</h3>
          </div>
          <div className="contact__website">
            <h3>lubnasyifa.netlify.com</h3>
          </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp'>
        <div className="contact__icon">
          <div className="icon">
            <a href="https://www.linkedin.com/in/lubnafairuzzafira/"><BsLinkedin/></a>
          </div>
          <div className="icon">
            <a href="https://github.com/lubnaafz"><FiGithub/></a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/lubnaafz/"><BsInstagram/></a>
          </div>
          <div className="icon">
            <a href="https://www.youtube.com/channel/UCmydIw9tTlKw0Emw4ERXijA"><BsYoutube/></a>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
    </section>
  )
}

export default Contact