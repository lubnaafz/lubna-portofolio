import React from 'react'
import './home.css'
import logo from '../../assets/logo.png'
import Resume from '../../assets/Resume.pdf'
import Typewriter from 'react-ts-typewriter';
import me from '../../assets/me.png'
import { BiChevronsDown } from "react-icons/bi";

const Home = () => {
  return (
    <section className='home__section' id='home'>
      <div className="home__header">
        <img src={logo} alt="logo" />
      </div>
      <div className="home__container container">
        <div className="home__desc">
          <span className='hi'><h2>Hi, it's me!</h2></span>
          <span className='name'><h1><Typewriter text='Lubna Fairuz Zafira' loop={true} speed={100} 
        cursor={false}/></h1></span>
        <span className='desc'><p>Welcome to my personal portofolio website.</p></span>
          <div className="CV">
            <a href={Resume}>My Resume</a>
          </div>
        </div>
        <img className="home__img" src={me} alt="me" />
      </div>
      <div className="home__scroll_down"> 
          <a href="#about"> <BiChevronsDown/> </a>
      </div>
    </section>
  )
}

export default Home