import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './SideBar.scss';

SideBar.propTypes = {
  side: propTypes.func,
  hendleColor: propTypes.func
};


export default function SideBar({side,hendleColor}){


  return(
    <>
      <div 
        className="back hide"
        onClick={side}
      >

      </div>
      <nav className="side-bar hide">
        <div className="to-go-out">
          <AiOutlineClose 
            className="icon-out"
            onClick={side}
          />
        </div>
        <div className="links-side-bar">
          <Link
            id="linkHome-sideBar"
            onClick={hendleColor}
            className="link-side-bar active"
            to={'/'}
          >
            Home
          </Link>

          <Link
            id="linkAboutUs-sideBar"
            onClick={hendleColor}
            className="link-side-bar"
            to={'/AboutUs'}
          >
            About Us
          </Link>

          <Link
            id="linkPlanet-sideBar"
            onClick={hendleColor}
            className="link-side-bar"
            to={'/3DPlanet'}
          >
            3D Planet
          </Link>
        </div>
      </nav>
    </>
  );
}
