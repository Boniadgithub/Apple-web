import  React, { useEffect } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo} from '../utils'
const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)
    
    const handleResize = () => {
        if(window.innerWidth < 768){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }
    useEffect (()=>{
    window.addEventListener('resize', handleResize);

    return ()=>{
        window.removeEventListener('resize', handleResize);
    }
    },[])
    
      





    useGSAP(() =>{
        gsap.to('#hero',{opacity:1 ,delay:1.5 })
    },[])
  return (
    <section className='w-full nav-height bg-black relative'>
       <div className='h-5/6 w-full flex-center flex-col  '>
         <p id="hero"className='hero-title'>iPhone 15 pro</p>
         <div className='md:w-10/12 w-9/12'>
             <video autoPlay muted playsInline={true} key={videoSrc} className=' pointer-events-none w-full h-full'>
                <source src={videoSrc} type="video/mp4"/>
             </video>
         </div>
       </div>
       
    </section>
  )
}

export default Hero
