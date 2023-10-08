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
            <p className="card-title">Como é a <span> temperatura </span> e o <span> clima </span> em Androxus?</p>
            <Button 
              id={'text1'} 
              className={'btn-card'}
              onClick={showText}
            >
              Click Here
            </Button>
          </div>
          <img src={img2} alt="" className="planet-img" />
        </div>
        <div className={`content ${text1?null:'hide'}`}>
          <p>A <span>temperatura</span> de Androxus se parece com um país tropical da terra. Durante Tenebris (Noites) a temperatura pode chegar a 289 kelvin 
             e durante Luxis (Dia) a temperatura pode ultrapassar os 300 kelvin. Já o <span>clima</span> de Androxus, é relativamente seco. A chuva acaba acontecendo
             de forma eventual durante o ano e na maioria das vezes ocorre em Tenebris.</p>
        </div>
      </section>
      <section className="card-img">
        <div className="card-img-min reverse">
          <img src={img3} alt="" className="planet-img" />
          <div className="card-info">
            <p className="card-title">O que são <span>Luxis</span> e <span>Tenebris</span> e porque o tempo passa mais devagar em Androxus?</p>
            <Button 
              id={'text2'} 
              className={'btn-card'}
              onClick={showText}
            >
              Click Here
            </Button>
          </div>
        </div>
        <div className={`content ${text2?null:'hide'}`}>
          <p>Em Androxus os dias são conhecidos como <span>Luxis</span> e as noites são conhecidas como <span>Tenebris</span>. O movimento de rotação de Androxus é mais lento
          se comparado a Terra, sua rotação dura em média 5 dias, dando a impressão do tempo passar mais devagar. Durante <span>Luxis</span>,  você ficará 2,5 dias em um imenso 
          clarão e durante <span>Tenebris</span>você ficará os outros 2,5 dias em completa escuridão . </p>
        </div>
      </section>
      <section className="card-img">
        <div className="card-img-min">
          <div className="card-info">
            <p className="card-title">Existe <span>vida</span> em Androxus? E como são seus <span>biomas</span> ?</p>
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
          <p>Que androxus possui oceanos vastos, possibilitando o desenvolvimento da <span>vida</span> a gente já sabe, mas será que realmente existe vida <span>extra-terrestre</span> neste novo planeta?
             Sim! No entanto, não existe vida inteligente em Androxus ;-; A vida desenvolvida no planeta é basicamente composta de <span>microorganismos</span> e vegetações rasteiras.
             </p>
             <p>
             Os <span>biomas</span> nas terras androxians são basicamente 3 tipos:  <span>Penumbra</span> um bioma de terreno muito fértil composto por vegetação diversificada, normalmente localizada ao redor dos oceanos; 
             <span>Rocker</span>, um bioma composto por elevações rochosas;<span>Crisper</span>, um bioma composto por areia de tons avermelhados formando um deserto sem fim.
             </p>
          
        </div>
      </section>
    </>

  );
}
export default Card;
