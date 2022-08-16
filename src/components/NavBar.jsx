import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import Logo from "../assets/cl.png"
import {Link} from "react-scroll"
const NavBar = () => {
    const [nav, setNav] = useState(false)   
    const handleClick =() => setNav(!nav)
  return (
    <>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
    <img src={Logo}  alt="Logo"style={{width: '80px'}}/>
    </div>
    
    
    <div className='hidden md:flex'>
        <ul className='flex'>
            <li>
            <Link to="home" spy={true} smooth={true}  duration={500}>
        
        
                Home
                </Link>
                </li>
            <li> <Link to="about" spy={true} smooth={true}  duration={500}>
        
        
        About
        </Link></li>
            <li>
            <Link to="skills" spy={true} smooth={true}  duration={500}>
        
        
        Skill
        </Link>
            </li>

            <li> <Link to="work" spy={true} smooth={true}  duration={500}>
        
        
        Projects
        </Link></li>

            <li> <Link to="contact" spy={true} smooth={true}  duration={500}>
        
        
        Contact
        </Link></li>
        </ul>
        </div>  

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars></FaBars>: <FaTimes></FaTimes>}
        </div>

       
        <ul  className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li  className='py-6 text-4xl'>
            <Link to="home" spy={true} smooth={true}  duration={500} onClick={handleClick}>
        
        
                Home
                </Link>
                </li>
            <li className='py-6 text-4xl'> <Link to="about" spy={true} smooth={true}  duration={500} onClick={handleClick}>
        
        
        About
        </Link></li>
            <li className='py-6 text-4xl'>
            <Link to="skills" spy={true} smooth={true}  duration={500} onClick={handleClick}>
        
        
        Skill
        </Link>
            </li>

            <li className='py-6 text-4xl'>  <Link to="work" spy={true} smooth={true}  duration={500} onClick={handleClick}>
        
        
        Projects
        </Link></li>

            <li className='py-6 text-4xl'> <Link to="contact" spy={true} smooth={true}  duration={500 } onClick={handleClick}>
        
        
        Contact
        </Link></li>
        </ul>

       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[66px] flex justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-blue-900'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/cesar-leon-634940236/'> Linkedin <FaLinkedin size={30}/></a>
               
            </li>
            <li className='w-[160px] h-[66px] flex justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-black'>
                <a  className='flex justify-between items-center w-full text-gray-300' href='http://github.com/prototypeK02'> GitHub <FaGithub size={30}/>
                </a>
               
            </li>
            <li className='w-[160px] h-[66px] flex justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-[#633232]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='mailto:kaos4everl@gmail.com'> Email <HiOutlineMail size={30}/></a>
               
            </li>

            <li className='w-[160px] h-[66px] flex justify-between ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1xH2kIG4gxfX7k7ed3rzm2GgcFmdLPA5p/view?usp=sharing'> Resume <BsFillPersonLinesFill size={30}/></a>
               
            </li>

        </ul>

       </div>
        

        </div>
    </>
  )
}

export default NavBar