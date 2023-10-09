import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {FiInstagram} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';
import hendlerColor from '../../js/hendlerColor';
import useColor from '../../hooks/useColor';
import logo from '../../img/logo.png';
function Footer(){
  useColor();
  return(
    <footer>
   
      <img src={logo} alt="logo-footer" className="logo-footer" />
      <div className="links-footer-div">
        <Link className="link-footer active"
          to={'/'}
          onClick={hendlerColor}
          id="link-footer-home"
        >
          Home
        </Link>

        <Link className="link-footer"
          to={'/AboutUs'}
          onClick={hendlerColor}
          id="link-footer-AboutUs"
        >
          About Us
        </Link>

        <Link className="link-footer"
          to={'/3DPlanet'}
          onClick={hendlerColor}
          id="link-footer-Planet"
        >
          3D Planet
        </Link>

      </div>
      <div className="div-icons-footer">
        <Link to={'https://www.instagram.com/_heleno__/'} className="link-footer-out">
          <FiInstagram className="icons-footer"/>
          <span className="toolchip"> Igor's Instagram</span>
        </Link>

        <Link to={'https://github.com/DuzzDev/NewWorld/tree/main'} className="link-footer-out">
          <AiFillGithub  className="icons-footer"/>
          <span className="toolchip">github repository</span>
        </Link>

        <Link to={'https://www.instagram.com/duzz_dev/'} className="link-footer-out">
          <FiInstagram className="icons-footer"/>
          <span className="toolchip">DuzzDev's Instagram</span>
        </Link>
      </div>

    </footer>
  );
}
export default Footer;
