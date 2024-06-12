import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src="banner1.jpg" alt="" />
          <div className="header-contents">
              <h2>Order your favourite food from here</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum mollitia quisquam iure vero aut aperiam a eum distinctio sit fugit!</p>
              <button><a href="#explore-menu">View Menu</a></button>
      </div>
      
      </div>
      {/* <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="banner1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518195%2Fbanner-2_htripb.jpg&w=1920&q=75"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518190%2Fbanner-1_sysmlz.jpg&w=1920&q=75"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
          
        <div className='w-70 position-relative m-3'>
         <h2>Categories</h2>
         <div className='d-flex justify-content-around flex-wrap position-relative '>
          
         </div>
      </div>
          
          
    </div> */}
      </>
  )
}

export default Header