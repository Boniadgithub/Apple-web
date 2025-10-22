import { useState } from 'react'
import Navbar from './component/navbar.jsx'
import Hero from './component/Hero.jsx'
import Highlights from './component/Highlights.jsx'


const App =() =>{
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
       <Navbar />
       <Hero/>
       <Highlights />
    </main>
  )
}

export default App
