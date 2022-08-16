import React from 'react'
import imgPI from "../assets/videoGAMESPI.jpg"
import mainstage from "../assets/mainStage.jpg"

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e9d045]'>Projects</p>
                <p className='py-4'>Here you will find the most recent projects I've been working</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                <div  style={{backgroundImage: `url(${imgPI})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-70'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
REACT SPA
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://pi-front-deploy.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2  bg-black text-white font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href='https://github.com/PrototypeK02/PI-VideoGames-Abel/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage: `url(${mainstage})`}}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-70'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
REACT E-Commerce
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://mainstage.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2  bg-black text-white font-bold text-lg hover:scale-110 duration-300'>Demo</button>
                            </a>
                            <a href='https://github.com/PrototypeK02/MainStage-APP-Final-Project-Henry'>
                                <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work