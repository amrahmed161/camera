import React from 'react'
import './about.css'
import camera from '../assets/kisspng-leica-camera-photography-real-old-leica-cameras-5aa2a5dfe8fc05.4377027815206087359543.png'
import circle from '../assets/kisspng-line-angle-point-pattern-line-overlay-blackandwhite-black-white-circle-bord-5cad735217df20.8070999615548711220978.png'
import writing from '../assets/kisspng-royal-typewriter-company-office-supplies-typing-wr-typewriter-5ac50b411351d5.4444119515228629130791.png'
import photo from '../assets/camera.png.png'
const About = () => {
  return (
    <>
    <section>
      <div className='container container__about'>
        <div className='img'>
          <img src={camera} alt =""/>
        </div>
        <div className='read'>
          <p>A true antique often defined as at least 100 years <br/>old,although the term is often used loosely to<br/> describe any object that is old.</p>
        </div>
      <div className='circle'>
      <img src={circle} alt =""/>
      </div>
      <div className='writing'>
        <div className='left'>
          <img src={writing} alt=''/>
        </div>
        <div className='right'>
          <h1>Antiques are<br/>Valuable</h1>
          <p>A relic or object of ancient times. 2a : a work of art.<br/>
          piece of furniture,or decorative object made at an<br/> earlier period and according to various customs laws at
          <br/>least 100 years ago b:a manufactured product (such <br/>as an automobile) from an earlier period. antique.
          </p>
          <button className='pnt'>READ MORE</button>
        </div>
      </div>
      <div className='circle'>
      <img src={circle} alt =""/>
      </div>
      <div className='camera2'>
        <div className='val'>
          <h1>Most Valuable<br/>Anitques</h1>
          <p>Domestic confined any but $on bachelor advanced <br/>
          remember. How proceed offered her offence shy <br/>
          forming. Returned peculiar pleasant but appetite <br/>
          differed she. Residence dejection agreement arn sa to<br/>
          abillies immediate buffering  </p>
          <button className='pnt'>READ MORE</button>
        </div>
        <div className='photo'>
          <img src={photo} alt =""/>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default About