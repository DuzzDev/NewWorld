import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {FiFacebook,FiInstagram} from 'react-icons/fi';
import {FaXTwitter} from 'react-icons/fa6';
function Footer(){
  return(
    <footer>
   
      <p className="logo">logo</p>
      <div className="links-footer-div">
        <Link className="link-footer">About Us</Link>
        <Link className="link-footer">Planet</Link>
        <Link className="link-footer">Info</Link>
      </div>
      <div className="div-icons-footer">
        <FiFacebook className="icons-footer"/>
        <FiInstagram className="icons-footer"/>
        <FaXTwitter className="icons-footer"/>
      </div>

    </footer>
  );
}
export default Footer;
