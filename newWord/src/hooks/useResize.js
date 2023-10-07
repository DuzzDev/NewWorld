import { useEffect } from 'react';

const useResize = (resize,dependency=null)=>{
  useEffect(()=>{
    window.addEventListener('resize',resize);
    return ()=>{
      window.removeEventListener('resize',resize);
    };
  },[dependency]);
};

export default useResize;
