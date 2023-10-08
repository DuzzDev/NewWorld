import React from 'react';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import './Home.scss';
import Section from '../../components/Section/Section';



function Home(){
  return(
    <section className="home">
      <Hero/>
      <Card/>
      <Section/>
    </section>
    
    
  );
}
export default Home;
