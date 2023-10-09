import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useColor = ()=>{
  const location = useLocation();
  useEffect(()=>{
    const linkHome = document.getElementById('linkHome');
    const linkAboutUs = document.getElementById('linkAboutUs');
    const linkService = document.getElementById('linkPlanet');
    const linkHomeSide = document.getElementById('linkHome-sideBar');
    const linkAboutUsSide = document.getElementById('linkAboutUs-sideBar');
    const linkServiceSide = document.getElementById('linkPlanet-sideBar');
    const linkHomeFooter = document.getElementById('link-footer-home');
    const linkAboutUsFooter = document.getElementById('link-footer-AboutUs');
    const linkServiceFooter = document.getElementById('link-footer-Planet');
  
    if(location.pathname == '/Home'){
      linkHome.classList.add('active');
      linkHomeSide.classList.add('active');
      linkHomeFooter.classList.add('active');
      linkAboutUs.classList.remove('active');
      linkService.classList.remove('active');
      linkAboutUsSide.classList.remove('active');
      linkServiceSide.classList.remove('active');
      linkAboutUsFooter.classList.remove('active');
      linkServiceFooter.classList.remove('active');
    }else if(location.pathname == '/AboutUs'){
      linkAboutUs.classList.add('active');
      linkHome.classList.remove('active');
      linkService.classList.remove('active');
      linkAboutUsSide.classList.add('active');
      linkHomeSide.classList.remove('active');
      linkServiceSide.classList.remove('active');
      linkAboutUs.classList.add('active');
      linkHome.classList.remove('active');
      linkService.classList.remove('active');
      linkAboutUsSide.classList.add('active');
      linkHomeSide.classList.remove('active');
      linkServiceSide.classList.remove('active');
      linkAboutUsFooter.classList.add('active');
      linkHomeFooter.classList.remove('active');
      linkServiceFooter.classList.remove('active');
    }else if(location.pathname == '/3DPlanet'){
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
  },[]);
};
export default useColor;
