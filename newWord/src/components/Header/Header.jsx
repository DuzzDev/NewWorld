import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import useResize from '../../hooks/useResize';
import {AiOutlineMenu} from 'react-icons/ai';
import SideBar from '../SideBar/SideBar';

function Header(){
  const [elements,setElements] = useState(true);
  const hendlerColor = (ev)=>{
  
    const linkHome = document.getElementById('linkHome');
    const linkAboutUs = document.getElementById('linkAboutUs');
    const linkService = document.getElementById('linkPlanet');
    const linkHomeSide = document.getElementById('linkHome-sideBar');
    const linkAboutUsSide = document.getElementById('linkAboutUs-sideBar');
    const linkServiceSide = document.getElementById('linkPlanet-sideBar');
  
    if(ev.target.id == 'linkHome'||ev.target.id == 'linkHome-sideBar'){
      linkHome.classList.add('active');
      linkHomeSide.classList.add('active');
      linkAboutUs.classList.remove('active');
      linkService.classList.remove('active');
      linkAboutUsSide.classList.remove('active');
      linkServiceSide.classList.remove('active');
    }else if(ev.target.id == 'linkAboutUs'||ev.target.id == 'linkAboutUs-sideBar'){
      linkAboutUs.classList.add('active');
      linkHome.classList.remove('active');
      linkService.classList.remove('active');
      linkAboutUsSide.classList.add('active');
      linkHomeSide.classList.remove('active');
      linkServiceSide.classList.remove('active');
    }else if(ev.target.id == 'linkPlanet'||ev.target.id == 'linkPlanet-sideBar'){
      linkService.classList.add('active');
      linkAboutUs.classList.remove('active');
      linkHome.classList.remove('active');
      linkServiceSide.classList.add('active');
      linkAboutUsSide.classList.remove('active');
      linkHomeSide.classList.remove('active');
    }
  
  };
  const hideElements = ()=>{
    if(window.innerWidth <= 600){
      setElements(false);
    }else{
      setElements(true);
    }
  };
  const side = ()=>{
    const arry = [
      document.querySelector('.side-bar'),
      document.querySelector('.back')
    ];
    arry.forEach((element)=>{
      element.classList.toggle('hide');
    });
    
  };
  useResize(hideElements);
  return(
    <>
      <header>
        <p className="logo">logo</p>
        <nav>
          <Link
            id="linkHome"
            className={`links-header active ${elements?null:'hide'}`}
            to={'/'}
            onClick={hendlerColor}
          >
            Home
          </Link>
          <Link
            id="linkAboutUs"
            className={`links-header  ${elements?null:'hide'}`}
            to={'/AboutUs'}
            onClick={hendlerColor}
          >
            About us
          </Link>
          <Link
            id="linkPlanet"
            className={`links-header  ${elements?null:'hide'}`}
            to={'/3DPlanet'}
            onClick={hendlerColor}
          >
            3D Planet
          </Link>
          <AiOutlineMenu className={`menu ${!elements?null:'hide'}`} onClick={side}/>
        </nav>
        <SideBar side={side} hendleColor={hendlerColor}/>
      </header>
    </>
  );
}
export default Header;
