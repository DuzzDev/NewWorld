import React from 'react';
import img1 from '../../img/img5.png';
import './Hero.scss';

export default function Hero(){
  return(
    <section className="hero">
      <h1>
      Como será viver em um  <span>Exoplaneta </span>Habitável, saiba tudo sobre a vida em 
      Androxus
      </h1>
      <p>
      O planeta conhecido mais parecido com a terra
      </p>
      <img src={img1} alt="" className="mainImg" />
    </section>
  );
}