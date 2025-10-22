import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
const navbar = () => {
  return (
    <header className='w-full py-5 sm:px-16 px-6 flex justify-between items-center'>
       <nav className='flex justify-between items-center w-full'>
         <img src={appleImg} alt='apple' width={14} height={18}/>

         <div className='flex gap-6'>
           {['Store','Mac','iPhone','Support'].map((nav)=>(
            <div key={nav} className='flex gap-8 text-gray-100 text-sm font-light hover:text-white cursor-pointer transition-all'>
              {nav}
            </div>
           ))}
         </div>
         <div className='flex gap-6'>
            <img src={searchImg} alt='search' width={14} height={18}/>
            <img src={bagImg} alt='bag' width={14} height={18}/>

         </div>
       </nav>
    </header>
  )
}

export default navbar
