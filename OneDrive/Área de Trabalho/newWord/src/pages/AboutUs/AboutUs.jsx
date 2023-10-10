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
        <p className="text-about">I'm heleno, Our team is made up of <span>2 developers</span>, and each one also performs other functions such as data analysis and graphic design. The 2 developers study the field of computer science and wanted to challenge themselves in this hackathon, building a project that taught astronomy to all types of people, in a visual and literary way in 48 hours.</p>
      </section>
      <section className="about-profile-card">
        <div className="card-profile">
          <img src={img2} alt="profile" className="profile"/>
          <p className="img-profile-text">Hello, I'm Duzz, I'm studying systems engineering and in this project I worked as a <span>front end developer</span> and <span>data analyst</span></p>
        </div>
        <div className="card-profile reverse">
          <p className="img-profile-text">Hello, I'm Heleno and in this project I worked as a <span>front end developer</span> and <span>graphic designer</span></p>
          <img src={img3} alt="profile" className="profile"/>
        </div>
    
      </section>
    </>
  );
}
export default AboutUs;
