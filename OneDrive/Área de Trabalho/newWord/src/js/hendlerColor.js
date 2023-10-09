const hendlerColor = (ev)=>{
  console.log(ev.target.id);
  const linkHome = document.getElementById('linkHome');
  const linkAboutUs = document.getElementById('linkAboutUs');
  const linkService = document.getElementById('linkPlanet');
  const linkHomeSide = document.getElementById('linkHome-sideBar');
  const linkAboutUsSide = document.getElementById('linkAboutUs-sideBar');
  const linkServiceSide = document.getElementById('linkPlanet-sideBar');
  const linkHomeFooter = document.getElementById('link-footer-home');
  const linkAboutUsFooter = document.getElementById('link-footer-AboutUs');
  const linkServiceFooter = document.getElementById('link-footer-Planet');
  
  if(ev.target.id == 'linkHome'||ev.target.id == 'linkHome-sideBar' ||ev.target.id == 'link-footer-home'){
    linkHome.classList.add('active');
    linkHomeSide.classList.add('active');
    linkHomeFooter.classList.add('active');
    linkAboutUs.classList.remove('active');
    linkService.classList.remove('active');
    linkAboutUsSide.classList.remove('active');
    linkServiceSide.classList.remove('active');
    linkAboutUsFooter.classList.remove('active');
    linkServiceFooter.classList.remove('active');
  }else if(ev.target.id == 'linkAboutUs'||ev.target.id == 'linkAboutUs-sideBar' ||ev.target.id == 'link-footer-AboutUs'){
    linkAboutUs.classList.add('active');
    linkHome.classList.remove('active');
    linkService.classList.remove('active');
    linkAboutUsSide.classList.add('active');
    linkHomeSide.classList.remove('active');
    linkServiceSide.classList.remove('active');
    linkAboutUsFooter.classList.add('active');
    linkHomeFooter.classList.remove('active');
    linkServiceFooter.classList.remove('active');
  }else if(ev.target.id == 'linkPlanet'||ev.target.id == 'linkPlanet-sideBar' ||ev.target.id == 'link-footer-Planet'||ev.target.id == 'btn-cta'){
    linkService.classList.add('active');
    linkAboutUs.classList.remove('active');
    linkHome.classList.remove('active');
    linkServiceSide.classList.add('active');
    linkAboutUsSide.classList.remove('active');
    linkHomeSide.classList.remove('active');
    linkServiceFooter.classList.add('active');
    linkAboutUsFooter.classList.remove('active');
    linkHomeFooter.classList.remove('active');
  }
  
};
export default hendlerColor;
