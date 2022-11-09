
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/water.jpg';
import img2 from '../../images/woman.jpg';
import img3 from '../../images/strong.jpg';
import img4 from '../../images/cycle.jpg';
import img5 from '../../images/sports.jpg';
import './Home.css'
import { Col, Row } from 'react-bootstrap';




const Home = () => {
  
    return (
       <div className='py-5'>
         <div className='container-fluid py-3'>
            
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
          src={img5} alt='img' />
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

        {/* <div>
          //Services

        </div> */}

     <div className='container-fluid py-5'>
        <h3 className='text-center all-text py-2'>About Me</h3>
        <Row xs={1} md={2} className='justify-space-between align-item-center text-center py-3'>
                <Col lg='6'>
                    <img src='https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='img-fluid rounded-2'/>
                </Col>

                <Col lg='6' >
               <div>
               <h5 className='text-center py-2'><span className='about-text'>My name is Shivana</span></h5>
               <h5 className='text-secondary fw-semibold py-2'>I am 35 years old. I am a Personal Health Coach</h5>
               <p className='text-start py-1'>One of the most famous fitness models worldwide. Thanks to her balanced physique and incredible definition she has been featured in many popular magazines, TV shows, commercials and music videos. As a certified personal coach and natural yoga trainer she helped thousands to transform their body. With EAST MODE she developed a 90 days transformation program which is based on more than 10 years experience as a fitness model and life coach.</p>
               <p>I started as yoga trainer and getting more and more close with people who came for yoga classes, I saw that it might not be all I can do for them. Then I started thinking about elaborating my own complex lifestyle program. I had a bunch of ideas so it started swiftly</p>
               </div>
                </Col>
            </Row>

     

     </div>
        
       <div className='gallery container py-5'>
            <h1 className='all-text text-center py-3'>My Gallery</h1>
            <Row>
                <Col lg='4'>
                    <img src={img1} alt='gallery' className='img-fluid rounded-2' data-bs-toggle='modal' data-bs-target='#exampleModal'/>
                </Col>
                <Col lg='4'>
                    <img src={img2} alt='gallery' className='img-fluid rounded-2'/>
                </Col>
                <Col lg='4'>
                    <img src={img3} alt='gallery' className='img-fluid rounded-2'/>
                </Col>

            </Row>
            <Row className='pt-3'>
                <Col lg='4'>
                    <img src={img5} alt='gallery' className='img-fluid rounded-2' data-bs-toggle='modal' data-bs-target='#exampleModal'/>
                </Col>
                <Col lg='4'>
                    <img src={img4} alt='gallery' className='img-fluid rounded-2'/>
                </Col>
                <Col lg='4'>
                    <img src='https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=600' alt='gallery' className='img-fluid rounded-2'/>
                </Col>

            </Row>
       </div>
           
       </div>
        
    );
};

export default Home;