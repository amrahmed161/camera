import React from 'react'
import './blog.css'
import '@splidejs/react-splide/css'
import img from '../assets/imega.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
const data = [
  {
      id :1,
      img :"image.jpg",
      name:"amr",
      review:"Modi alias animl dolorem aliqum ea eum beatae maiores, consectetur praesentium quibussam, comodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspernaturn labore "
  },
  {
      id :2,
      img :"image.jpg",
      name:"amr",
      review:"Modi alias animl dolorem aliqum ea eum beatae maiores, consectetur praesentium quibussam, comodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspernaturn labore"
  },
  {
      id : 3,
      img :"image.jpg",
      name:"amr",
      review:"Modi alias animl dolorem aliqum ea eum beatae maiores, consectetur praesentium quibussam, comodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspernaturn labore"
  },
  {
      id :4,
      img :"image.jpg",
      name:"amr",
      review:"Modi alias animl dolorem aliqum ea eum beatae maiores, consectetur praesentium quibussam, comodi velit porro blanditis consequatur qui molestiae. Dolorem, perspiciatis aspernaturn labore"
  },

]
const Blog = () => {
  return (
    <>
    <div className='container container_blog'>
      <h1>what</h1>
      <div className='cards'>
              <Splide aria-label="Testimonials"  options={{
                fixedwidth: "300px",
                perPage: 3,
                focus : 'center',
              }}>
              {data.map((value)=>{
              return(
                <SplideSlide key={value.id} className='card'>
                  <img src={img} alt=""/>
                  <h2>{value.name}</h2>
                  <p>{value.review}</p>
              </SplideSlide>
              )
          })}
          
        
        </Splide>
      
        
      </div>
    </div>
    </>
  )
}

export default Blog