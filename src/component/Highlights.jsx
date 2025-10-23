import { useGSAP } from '@gsap/react'
import React, { use } from 'react' 
import gsap from 'gsap' 

const Highlights = () => {

  useGSAP(() =>{
    gsap.to('#title',{opacity:1,y:0},)
  },[])
  return (
    <section id='Highlights' className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className='w-full items-end justify-between mb-20'>
        <h2 className='section-heading' id="title">Get the Highlights</h2>
        </div>
    </section>
  )
}

export default Highlights
