import React from 'react';
import img1 from '../../img/img5.png';
import './Hero.scss';

export default function Hero(){
  return(
    <section className="hero">
      <h1>
      What it will be like to live on a Habitable <span>Exoplanet</span>, find out everything about life on Androxus
      </h1>
      <p>
      The new home of humanity
      </p>
      <img src={img1} alt="" className="mainImg" />
    </section>
  );
}
