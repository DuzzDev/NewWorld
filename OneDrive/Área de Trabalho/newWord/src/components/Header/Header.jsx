import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import useResize from '../../hooks/useResize';
import {AiOutlineMenu} from 'react-icons/ai';
import SideBar from '../SideBar/SideBar';
import hendlerColor from '../../js/hendlerColor';
import useColor from '../../hooks/useColor';
import logo from '../../img/logoHeader.png';


function Header(){
  const [elements,setElements] = useState(true);
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
  useColor();
  useResize(hideElements);
  return(
    <>
      <header>
        <img src={logo} alt="logo" className="logo"/>
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
