import { useGSAP } from '@gsap/react'
import React, { use } from 'react' 
import gsap from 'gsap' 
import { rightImg, watchImg } from '../utils'

const Highlights = () => {

  useGSAP(() =>{
    gsap.to('#title',{opacity:1,y:0},)
    gsap.to ('.link',{opacity:1,y:0, duration:1, stagger:0.25, delay:0.5})
  },[])
  return (
    <section id='Highlights' className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className='w-full items-end md:flex justify-between mb-20'>
        <h2 className='section-heading' id="title">Get the Highlights</h2>

        <div className='flex flex-wrap items-end gap-5'>
          <p className='link'>
            watch the film
            <img src={watchImg}  id ="watch" alt='watch' className='ml-2' />
          </p>
          <p className='link'>
            watch the event
            <img src={rightImg}  id ="watch" alt='watch' className='ml-2' />
          </p>
          
        </div>
        </div>
    </section>
  )
}

export default Highlights
