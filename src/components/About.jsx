import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e9d045]'>About  </p>
                       
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4   '>
                <div className='sm:text-right text-4xl font-bold'>
                <p >Hi, I'm Cesar, welcome to my site, here you will find more info about me.</p>
                </div>

                <div>
               <p> I'm a 31 years old Venezuelan guy living in Argentina. Since I was a child I've had love for tech, but my first contact with Development came at my late 30s, just to found out that effectively this is something I should have done many years ago. 

I really love what I do,  I'm highly oriented to achieve goals, and I also believe that perseverance, teamwork, and a good communication are solid bases to build anything.
Lets Collaborate!</p>
            </div>
            </div>    
        </div>
        </div>
  
  )
}

export default About