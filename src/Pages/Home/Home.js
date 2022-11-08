import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/water.jpg';
import img2 from '../../images/woman.jpg';
import img3 from '../../images/strong.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='container-fluid'>
            
            <Carousel >
      <Carousel.Item>
        <div className='banner-img'>

        <img
          className="d-block w-100"
          src={img1}
         
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
        <h2 className='banner-text'>Hi, I'm Shivana!</h2>
          <p className=''>Your new Personal Coach for better life!</p>
        </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item >
       <div className='banner-img'>
       <img
          className="d-block w-100"
          src={img2} alt='img' />
       </div>

        <Carousel.Caption>
        <h2 className='banner-text'>Hi, I'm Shivana!</h2>
          <p className=''>Your new Personal Coach for better life!</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <div className='banner-img'>
        <img
          className="d-block w-100"
          src={img3}

          alt="Third slide"
        />
        </div>

        <Carousel.Caption>
          
        <h2 className='banner-text'>Hi, I'm Shivana!</h2>
          <p className=''>Your new Personal Coach for better life!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Home;