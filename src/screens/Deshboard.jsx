import {React , useState} from 'react'
import MainLayout from '../components/MainLayout'
import logo1 from '../assets/image/image1.jpg';
import logo2 from '../assets/image/image2.jpg';
import logo3 from '../assets/image/image1.jpg';
// import image3 from '../assets/image/Nuture.jpg';
import'../assets/styles/Deshboard.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Deshboard() {
    
  
  return (
  <MainLayout>
    {/* <div className='p-5'>  */}
        
    <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active "  
             data-bs-interval={2000}>
              <img src={logo1} className="d-block w-100 " height={"100%"} alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={logo2} className="d-block w-100 c"  height={"100%"} alt="..." />
            
            </div>
            <div className="carousel-item" data-bs-interval={2000}> 
              <img src={logo3} className="d-block w-100 carousel-img"   alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" style={{color:"#000",fontSize:"18rem"}} aria-hidden="true" />
            <span className="visually-hidden" >Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
            {/* </div> */}
    </MainLayout>
  )
}

export default Deshboard
