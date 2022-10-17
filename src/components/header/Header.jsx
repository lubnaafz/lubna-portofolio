import React from 'react'
import './header.css';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs';
import { MdOutlineMessage } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';



const Header = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [toggle, showNav] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="nav__menu">
          <div className="nav__toggle" onClick={() => showNav(!toggle)}>
            <BiMenu />
          </div>
          <div className={toggle ? "nav__list show_nav" : "nav__list"}>
          <AiOutlineCloseCircle className='nav__close' onClick={() => showNav(!toggle)}/>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
              <AiOutlineHome className='nav__icon'/> Home</a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
              <AiOutlineUser className='nav__icon'/> About</a>
            <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>
              <BsFiles className='nav__icon'/> Project</a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
              <MdOutlineMessage className='nav__icon'/> Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header