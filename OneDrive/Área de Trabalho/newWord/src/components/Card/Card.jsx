import React,{useState} from 'react';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import Button from '../Button/Button';
import './Card.scss'; 


function Card(){
  
  const[text1,setText1] = useState(false);
  const[text2,setText2] = useState(false);
  const[text3,setText3] = useState(false);

  const showText = (ev)=>{
    if(ev.target.id == 'text1'){
      setText1(!text1);
    }else if(ev.target.id == 'text2'){
      setText2(!text2);
    }else if(ev.target.id == 'text3'){
      setText3(!text3);
    }
  };
  return(
    <>
      <section className="card-img">
        <div className="card-img-min">
          <div className="card-info">
            <p className="card-title">What is the <span> climate </span> and<span> temperature </span> like in Anydrus?</p>
            <Button 
              id={'text1'} 
              className={'btn-card'}
              onClick={showText}
            >
              Clique Here
            </Button>
          </div>
          <img src={img2} alt="" className="planet-img" />
        </div>
        <div className={`content ${text1?null:'hide'}`}>
          <p>The <span>temperature</span> of Androxus resembles a tropical country on earth. During Tenebris (Nights) the temperature can reach 289 kelvin 
           and during Luxis (Day) the temperature can exceed 300 kelvin. The <span>climate</span> of Androxus is relatively dry. Rain happens occasionally throughout the
           year and most of the time it occurs in Tenebris.</p>
        </div>
      </section>
      <section className="card-img">
        <div className="card-img-min reverse">
          <img src={img3} alt="" className="planet-img" />
          <div className="card-info">
            <p className="card-title">What are <span>Luxis</span> and <span>Tenebris</span> and why does time pass slower in Androxus?</p>
            <Button 
              id={'text2'} 
              className={'btn-card'}
              onClick={showText}
            >
              Clique Here
            </Button>
          </div>
        </div>
        <div className={`content ${text2?null:'hide'}`}>
          <p>In Androxus the days are known as <span>Luxis</span> and the nights are known as <span>Tenebris</span>. Androxus's rotational movement is slower compared
             to Earth's, its rotation lasts an average of 5 days, giving the impression that time passes more slowly. 
          </p>
        </div>
      </section>
      <section className="card-img">
        <div className="card-img-min">
          <div className="card-info">

            <p className="card-title">Is there <span>life</span> on Androxus? And what are their biomes <span>biomes</span> like ?</p>

            <Button 
              id={'text3'} 
              className={'btn-card'}
              onClick={showText}
            >
              Click Here
            </Button>
          </div>
          <img src={img4} alt="" className="planet-img" />
        </div>
        <div className={`content ${text3?null:'hide'}`}>
          <p>We already know that Androxus has vast oceans, enabling the development of <span>life</span>, but does <span>extra-terrestrial</span> life really exist on this new planet?
             Yes! However, there is no intelligent life on Androxus ;-;
             Life developed on the planet is basically made up of microorganisms <span>microorganisms</span> and low vegetation.
             </p>
             <p>
             The <span>biomes</span> in Androxian lands are basically 3 types: <span>Penumbra</span>, a very fertile terrain biome composed of diverse vegetation, normally located around the oceans; 
             <span>Rocker</span>, a biome composed of rocky elevations; <span>Crisper</span>, a biome composed of reddish sand forming a endless desert.
             </p>
          
        </div>
      </section>
    </>

  );
}
export default Card;
