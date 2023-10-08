import React from  'react';
import img1 from '../../img/Clima.jpg';
import img2 from '../../img/sociedade 1.jpg';
import img3 from '../../img/sociedade 2.jpg';
import img4 from '../../img/sociedade.jpg';
import img5 from '../../img/chegando.jpg';
import img6 from '../../img/primeira.jpg';
import './Section.scss';

function Section (){
    return(
        <>
            <section className="conteiner">
                <div>
                <img src={img1} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img"> The <span className="color">Beginning</span> of a New World</p>
                </div>
                <p className="text"> Since the Biological Wars, Planet Earth has never been the same, there has only been sadness and ruins. Until the day that the planet Anydrus was discovered by the HWO (Habitable Worlds Observatory), fueling our dreams about what would be the highest similarity index to Earth ever discovered, the index reached 0.99.
                 After a few years of research, the Irium spacecraft was created, which could travel at the speed of light. Thus began the New World experiment, the first expedition to an exoplanet.
                 The journey to Androxus was a journey that changed the course of human history. We left Earth with a group of hand-picked people,
                 trained to withstand extreme situations and ready to face the unknown. During the years on the Irium ship, anxiety and excitement
                 they were palpable, due to the enormous distance of 10 light years from Anydrus to Earth, but there was also a deep sense of duty. we will be
                 the first to arrive in this new world and, with it,
                 We had a responsibility to forge a future for humanity.</p>
            </section>
            <section className="conteiner">
                <div>
                <img src={img2} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img">The Eternal <span className="color">Journey</span> </p>
                </div>
                <p className="text">
                The days turned into months, throughout the trip we faced unexpected challenges. The immensity of space and loneliness constantly reminded us of the vastness
                of the universe and the smallness of our presence in it. Irium, an engineering miracle, provided us with everything we needed to survive. Our water supply was
                strictly controlled, every drop was precious. And the food, grown in controlled environments on board, was a constant reminder of our dependence on the advanced
                technology that got us here.</p>
            </section>
            <section className="conteiner">
                <div>
                <img src={img3} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img">The <span className="color">D-day </span> </p>
                </div>
                <p className="text">Finally, the time has come for our arrival at Anydrus. A tense and expectant atmosphere filled Irium, it was the moment we had been waiting for for so long. As we exited the ship and took our first steps onto the surface, I saw a world that was at once strange and familiar. Androxus's first impressions were overwhelming. The sky,
                tinged with reddish hues, it reflected the soft light of its star, Chronos, a red dwarf star that rose majestically on the horizon. Tense gravity forced us to adjust our pace, and the rotational movement that lasted 5 days required a redefinition of our concepts of day and night,
                which were now called luxis and tenebris respectively. </p>
            </section>
            <section className="conteiner">
                <div>
                <img src={img4} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img"> Adapting to the <span className="color">New World</span> </p>
                </div>
                <p className="text"> Due to the proximity of Anydrus and its star, gravity caused the planet to have a slower rotation movement, causing bipolarity on the planet. A region of the planet was completely illuminated for 2.5 days and then completely dark for another 2.5 days, completing a rotation cycle.
                 Our base was established in the twilight region, where conditions were most favorable. There, we began building sturdy underground shelters to shelter us from Chronos' intense stellar winds. Space thermal insulation technology has made it possible to create a livable and comfortable environment,
                 similar to a tropical climate on Earth. The biodiversity of Anydrus left us amazed. Microorganisms found in the vast oceans have turned out to be resilient and versatile, and some of our scientists believe that, in time, we may be able to create the conditions for more complex life to flourish.
                </p>
            </section>
            <section className="conteiner">
                <div>
                <img src={img5} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img"> <span className="color">Magno</span>, the first anydrum</p>
                </div>
                <p className="text">After 10 months of New World, it was here, in this new home, amid the hopes and challenges of Anydrus, that we witnessed the birth of Magno, the first Androxian, a living promise of our future on this planet and a symbol
                of our pioneering journey into the unknown. Magnus, as his name suggests,
                It is the embodiment of our pride and our determination to build a new world. He will be the guardian of the legacy of
                Pioneers, as the participants of the first expedition to Anydrus are known.

                The settlement of Anydrus progressed rapidly. The Pioneers soon welcomed other settlers,
                and a unique society began to form. The years that followed were marked by challenges
                and discoveries. Living with the differences between Luxis and Tenebris, with their eternal contrast of light and darkness, forced us to innovate our survival strategies. The air currents generated
                due to the difference in temperature between the regions of luxis and tenebris, they became essential to control the planet's climate.</p>
            </section>
            <section className="conteiner">
                <div>
                <img src={img6} alt="" className="img-sociedade" />
                <span className="back-img"></span>
                <p className="text-img"> The <span className="color">future</span> of Anydrus </p>
                </div>
                <p className="text">Looking back, I see that we are true explorers. Our lives are shaped by the need to constantly adapt and the understanding that we are the guardians of this foreign planet.
 As we continue to expand our settlements and explore the secrets of Androxus,
I am hopeful that we can build a society that honors the Earth we leave behind and celebrates
 the courage and determination that brought us here.

 The journey to Androxus taught us that the quest for the unknown and the willingness to face seemingly insurmountable challenges are at the core of human nature.
We are the children of the Earth,
 But now we are also the children of Androxus, and it is our responsibility to shape the destiny of this new world and ensure that it flourishes as much as the Earth we left behind.
 
 "Magno, you are the hope of a bright future on Androxus, may this journey continue to be a celebration of human courage and
desire to explore the unknown."</p>
            </section>
        </>
    );
}
export default Section;
