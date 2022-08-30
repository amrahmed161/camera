import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
    <section id='contact'>
      <div className='container container__contact'>
        <h1>Contact Us</h1>
        <form>
        <input type='text' name = 'name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='your Email' required/>
          <textarea name='massage' rows="7" required></textarea>
          <button type='submit' className='pnt'>Send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact