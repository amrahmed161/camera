import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
        <Link to ="/" className='footer__logo'>Camera</Link>
        <ul className='permalinks'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='footer__socials'>
          <ul>
            <li>
              <Link to="https://facebook.com"><BsFacebook/></Link>
              
            </li>
            <li>
            <Link to="https://instagram.com"> <BsInstagram/></Link>
             </li>
             <li>
              <Link to= "https://linkedin.com"><BsLinkedin/></Link>
             </li>
             <li>
              <Link to ="https://githup.com"><BsGithub/></Link>
             </li>
          </ul>
        </div>
        <div className='footer__copyright'>
          <small>&copy; Amr ahmed.all right reserved</small>
        </div>
    </footer>
  )
}

export default Footer