import React from 'react';
import './AboutUs.scss';
import img from '../../img/creeps.jpg';
import img2 from '../../img/kayky.jpg';
import img3 from '../../img/igor.jpg';
function AboutUs(){
  return(
    <>
      <section className="conteiner-about">
        <div className="card-img-about">
          <img src={img} alt="" className="about-img"/>
        </div>
        <p className="text-about">I'm heleno, I'm a developer and data analyst and I come from Brazil. Our <span>team has 2 developers and a data analyst,</span> we all work in the field and are studying engineering or computer science. The team needs a graphic or UI/UX designer to be able to master the challenge.</p>
      </section>
      <section className="about-profile-card">
        <div className="card-profile">
          <img src={img2} alt="profile" className="profile"/>
          <p className="img-profile-text">Hello, I'm Kayky, I'm a junior dev and I work in the <span>Front-end developer</span> area</p>
        </div>
        <div className="card-profile reverse">
          <p className="img-profile-text">Hello, I'm Igor, I'm a junior dev and I work in the <span>Front-end developer</span> area</p>
          <img src={img3} alt="profile" className="profile"/>
        </div>
    
      </section>
    </>
  );
}
export default AboutUs;
