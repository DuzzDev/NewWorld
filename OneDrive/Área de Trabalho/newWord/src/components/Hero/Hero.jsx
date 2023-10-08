import React from 'react';
import img1 from '../../img/img5.png';
import './Hero.scss';

export default function Hero(){
  return(
    <section className="hero">
      <h1>
      Lorem ipsum dolor sit amet <span>adipisicing </span>consectetur, elit. Repellendus autem ab deserunt,
      cupidi
      </h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, magni.
      </p>
      <img src={img1} alt="" className="mainImg" />
    </section>
  );
}
