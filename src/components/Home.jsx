import React from 'react'
import { HiArrowNarrowRight} from "react-icons/hi"
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#0a192f]'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-[#e9d045]'>Hi! My name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >{"< Cesar Leon />"}</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b1]'>I'm a Full Stack developer</h2>
    <p className='text-[#8892b1] py-4 max-w-[700px]'> With experience in designing and building of Web
Application using Javascript as main language and all technologies related
to it. Im also pushing myself every single day to grow as developer, facing
challenging problems to improve my skills.</p>
<div>
<Link to="work" spy={true} smooth={true}  duration={500 }>
<button className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e9d045] hover:border-[#e9d045]'>Check My Projects! 
<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/></span>
</button>
</Link>
</div>
    </div>

    </div>
  )
}

export default Home