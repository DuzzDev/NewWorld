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
              Clique Here
            </Button>
          </div>
          <img src={img2} alt="" className="planet-img" />
        </div>
        <div className={`content ${text1?null:'hide'}`}>
          <p>A <span>temperatura</span> de Androxus se parece com um país tropical da terra. Durante Tenebris (Noites) a temperatura pode a 289 kelvin 
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
              Clique Here
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
            <p className="card-title">Existe vida em <span>Androxus?</span> E como são seus biomas ?</p>
            <Button 
              id={'text3'} 
              className={'btn-card'}
              onClick={showText}
            >
              Clique Here
            </Button>
          </div>
          <img src={img4} alt="" className="planet-img" />
        </div>
        <div className={`content ${text3?null:'hide'}`}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique error suscipit odio aliquam blanditiis sequi, veritatis minima voluptas modi quo quod delectus labore asperiores enim. Alias consequuntur quibusdam exercitationem. Quasi nihil quisquam voluptatibus iure in dicta odio praesentium esse ut a corporis tempore officia doloremque repellat, modi saepe fugit hic consectetur placeat, odit facilis! Mollitia quisquam consequuntur tempore est perspiciatis ipsam voluptatum nostrum, similique magni et! Maiores libero voluptate cupiditate vel repudiandae sapiente molestiae eius natus quam voluptatum blanditiis mollitia et, architecto dolorum voluptates deserunt totam iure. Ratione praesentium animi voluptatum maxime sit quas illum voluptatibus, quo at numquam corporis, nostrum doloribus incidunt nihil quis aut, laudantium sunt. Nobis, numquam? Similique dolores, quos aut maiores accusamus nemo sit, illo illum quasi dignissimos quas, eum quaerat ipsum ullam molestias id numquam rerum inventore quo nam atque placeat? Asperiores aut nostrum non dolor at! Possimus dolores dignissimos cum consectetur laudantium sunt minus accusamus voluptatibus assumenda quia recusandae, repellendus, molestias qui quibusdam et, delectus dolorem numquam ipsum eius omnis est? Delectus eveniet natus saepe dolor perferendis rerum harum officiis nihil quia, blanditiis excepturi quibusdam, mollitia odit debitis ipsam. Nesciunt, distinctio. Id sunt corporis illo sed, quia magnam pariatur ratione facere ex quidem. Enim libero laborum aliquam nemo consequatur recusandae amet ab dicta hic minus beatae cupiditate obcaecati, deserunt mollitia veniam temporibus blanditiis culpa? Aspernatur expedita obcaecati aliquid distinctio, tempora vitae? Ipsa, aperiam? Sunt itaque quasi illum illo maxime eum! Nam quas voluptate natus veniam optio, mollitia officiis quisquam voluptates? Ratione tempora, voluptatum at nobis, atque accusantium vero aspernatur illo nihil quidem libero facere? Voluptatum tenetur magnam a harum, tempora accusantium pariatur quibusdam perferendis soluta placeat sequi animi alias, asperiores, recusandae dolorem fugit dolor minus et culpa amet praesentium rem vero voluptatem reprehenderit. Iure voluptates eum neque corporis dolor est, totam molestiae mollitia beatae magni consequuntur soluta exercitationem reiciendis recusandae cumque nulla praesentium expedita debitis. Ab ipsa nam neque distinctio quibusdam voluptas, ut dolor enim. Aliquid unde eum commodi rem quibusdam similique officia exercitationem harum, iste quasi cumque a officiis sint illum earum hic voluptates nobis repellendus iusto aspernatur ullam laboriosam expedita. Nisi, repellat!</p>
        </div>
      </section>
    </>

  );
}
export default Card;
