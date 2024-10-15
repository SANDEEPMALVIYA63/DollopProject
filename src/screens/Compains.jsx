// import React from 'react'
// import MainLayout from '../components/MainLayout'
// import { Carousel } from 'react-responsive-carousel';
// function Compains() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//   return (
//     <MainLayout>
//     <div>
//     <Carousel showThumbs={false} autoPlay infiniteLoop>
//       <div>
//         <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/800x300" alt="Slide 2" />
//       </div>
//       <div>
//         <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
//       </div>
//     </Carousel>
//     <div className="carousel-container">
//       <button onClick={prevSlide}>&#10094;</button>
//       <div className="carousel-slide">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//       </div>
//       <button onClick={nextSlide}>&#10095;</button>
//     </div>
//     </div>
//     </MainLayout>
//   )
// }

// export default Compains
