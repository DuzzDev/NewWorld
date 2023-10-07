import React from 'react';
import Card from '../../components/Card/Card';
import './Home.scss';


function Home(){



  return(
  
    <section className="home">
      <section className="hero">
        <h1>
          Lorem ipsum dolor sit amet <span>adipisicing </span>consectetur, elit. Repellendus autem ab deserunt,
          cupidi
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, magni.
        </p>
      </section>
   
      <Card/>
    </section>
    
  );
}
export default Home;
