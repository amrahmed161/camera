import React ,{useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo 02.png'
import {FaWhatsapp} from 'react-icons/fa'
import{AiOutlineShopping} from 'react-icons/ai'
import {MdOutlineSaveAlt} from 'react-icons/md'
import{BiSearch} from 'react-icons/bi'
import {FaBars , FaTimes} from 'react-icons/fa'
const Navbar = () => {
  const[click , setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
    <div className='navbar'>
     <div className='container container__navbar'>
      <div className='logo'>
      <img src={logo} alt=""/>
      </div>
        <ul className={click ? "nav-menu active " : "nav-menu"}>
          <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to = '/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      <div className='icon'>
        <FaWhatsapp className='ctn'/>
        <AiOutlineShopping className='ctn'/>
        <MdOutlineSaveAlt className='ctn'/>
        <BiSearch className='ctn'/>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaBars/>) : (<FaTimes/>)}
        
      </div>
     </div>
    </div>
    </>
  )
}

export default Navbar