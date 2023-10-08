import React from 'react';
import Card from '../../components/Card/Card';
import './Home.scss';
import Hero from '../../components/Hero/Hero';


function Home(){



  return(
  
    <section className="home">
      <Hero/>
      <Card/>
    </section>
    
  );
}
export default Home;
