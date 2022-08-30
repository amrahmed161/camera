import React from 'react'
import './home.css'
import photo from '../assets/119-1193868_retro-camera-png-vintage-camera-png-transparent-png.png'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import {GiTrophyCup} from 'react-icons/gi'
const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='container container__navbar'>
        <div className='left'>
          <h6>Antique Shop</h6>
          <h1>Famous Arntique<br/>
          <span>Collection</span> Point
          </h1>
          <p>
            A true antique is an item perceived as having value because of its aesthetic or historical significance, and often defined as at least 100 years old, although the term .
          </p>
          <button className='ctn'> Explore More</button>
        </div>
        <div className='right'>
          <img src={photo} alt =""/>
          <div className='year'>
            <div className='old'>
              <MdOutlineEmojiPeople className='yas'/>
              <div className='text'>
              <h4>1322</h4>
              <h6>Year</h6>
              </div>
            </div>
            <div className='old'>
              <GiTrophyCup className='yas'/>
              <div className='text'>
              <h4>29</h4>
              <h6>Bids so fac.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home