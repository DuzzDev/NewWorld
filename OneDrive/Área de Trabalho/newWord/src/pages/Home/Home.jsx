import React from 'react';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import './Home.scss';
import Section from '../../components/Section/Section';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import hendlerColor from '../../js/hendlerColor';



function Home(){
  return(
    <section className="home">
      <Hero/>
      <Card/>
      <Section/>
      <section className="cta-card">
        <p className="cta-text">See our 3D model of the Anydrus planet by <span>clicking</span> the button below</p>
        <Link to={'/3DPlanet'}>
          <Button className="cta-btn" onClick={hendlerColor} id={'btn-cta'}>
            Click Here
          </Button>
        </Link>
      </section>
    </section>
    
    
  );
}
export default Home;
