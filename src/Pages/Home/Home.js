
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/water.jpg';
import img2 from '../../images/woman.jpg';
import img3 from '../../images/strong.jpg';
import img4 from '../../images/cycle.jpg';
import img5 from '../../images/sports.jpg';
import './Home.css'
import { Button, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Services from '../../Shared/Services/Services';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Activity from '../../Shared/Activity/Activity';
import Join from '../../Shared/Join/Join';





const Home = () => {

  const [services, setServices] = useState([]);

  useTitle('Home')

  useEffect(() => {
    fetch('https://health-coach-server-self.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))

  }, []);



  return (
    <div className='py-5'>

      {/* ========= Banner ======== */}
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

      <div className='container py-4'>
      <h4 className='text-center fw-semibold style-text me-5 pe-5'>What We Do</h4>
        <h2 className='text-center all-text mb-3 ms-5 ps-5'>Our Services </h2>
        <Row xs={1} md={3} className="g-4">
          {
            services.map(service => <Services key={service._id} service={service}></Services>)
          }


        </Row>

        <div className='text-center py-2'>
          <Link to='/service'>
            <Button className='btn1 fw-semibold'>Show All <FaArrowRight /></Button>
          </Link>
        </div>

      </div>

      {/* ======== intro ========== */}
      <div className='container py-4'>
      
        <Row xs={1} md={2} className='justify-space-between align-items-center text-center py-3'>
          

          <Col lg='6' >
            <div>
            <h4 className='text-center fw-semibold style-text ps-5 ms-5'>Some Story Behind Us</h4>
        <h5 className='text-start mb-3 about-text'>WE HAVE 20 YEARS OF EXPERIENCE</h5>
              <p className='text-start'>We handpick the best coaches and health experts from across the country to make sure you get the mostpersonalized health care you deserve between those doctor visits.Our wealth of experience equips us with a deep understanding of various fitness methodologies, allowing us to create tailored programs that suit individual needs. We have successfully guided countless clients towards achieving their health and wellness goals.</p>
              <p className='text-start'>
              Through our 20 years of practice, we have developed a comprehensive approach that encompasses physical fitness, nutrition, and mental well-being. Our coaches and experts are well-versed in the latest research and advancements in the field, ensuring that our clients receive the most up-to-date and effective strategies.
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <img src='https://i.ibb.co/FgKyQZ0/intro-image.png' alt='' className='img-fluid rounded-2' />
          </Col>
        </Row>



      </div>


          {/* ========= About me =========== */}
      <div className='container-fluid py-3'>
      <h4 className='text-center fw-semibold style-text pe-5 me-5'>Let's Introduce</h4>
        <h3 className='text-center all-text mb-4 ms-4'>About Me</h3>
        <Row xs={1} md={2} className='justify-space-between align-item-center text-center py-4'>
          <Col lg='6'>
            <img src='https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' className='img-fluid rounded-2' />
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


      {/* ========= My Gallery =========== */}

      <div className='gallery container py-5'>
      <h4 className='text-center fw-semibold style-text pe-5 me-5'>Some Photos from</h4>
        <h1 className='all-text text-center mb-3 ms-5'>My Gallery</h1>
        <Row className='py-3'>
          <Col lg='4'>
            <img src={img1} alt='gallery' className='img-fluid rounded-2' data-bs-toggle='modal' data-bs-target='#exampleModal' />
          </Col>
          <Col lg='4'>
            <img src={img2} alt='gallery' className='img-fluid rounded-2' />
          </Col>
          <Col lg='4'>
            <img src={img3} alt='gallery' className='img-fluid rounded-2' />
          </Col>

        </Row>
        <Row className='pt-3'>
          <Col lg='4'>
            <img src={img5} alt='gallery' className='img-fluid rounded-2' data-bs-toggle='modal' data-bs-target='#exampleModal' />
          </Col>
          <Col lg='4'>
            <img src={img4} alt='gallery' className='img-fluid rounded-2' />
          </Col>
          <Col lg='4'>
            <img src='https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=600' alt='gallery' className='img-fluid rounded-2' />
          </Col>

        </Row>
      </div>

          {/* =========== Our Mission=========== */}
      <div className='container py-4'>
      <h4 className='text-center fw-semibold style-text pe-5 me-5'>Lets Talk About </h4>
          <h3 className='text-center all-text mb-4 ms-5'>Our Mission</h3>
      <Row xs={1} md={2} className='justify-space-between align-items-center text-center py-3'>
        

        <Col lg='6' >
          <div>
         
            <p className='text-start'>We aim to educate, inspire, and motivate our clients to make positive lifestyle changes that promote long-term health. Our mission is to create a nurturing environment where individuals feel empowered to take control of their physical, mental, and emotional well-being.</p>
            <p className='text-start'>
            Through our expertise and knowledge, we strive to help our clients set achievable goals, overcome obstacles, and cultivate healthy habits that last a lifetime. Our mission is to be a trusted partner in the pursuit of health, guiding individuals towards a happier, healthier, and more fulfilling life.
            </p>
          </div>
        </Col>
        <Col lg='6'>
          <img src='https://i.ibb.co/t3X220X/Misson.jpg' alt='' className='img-fluid rounded-2' />
        </Col>
      </Row>



    </div>

        {/* =========Activity ============ */}
        <Activity/>
    {/* =========== Our Vision =========== */}
    <div className='container py-4'>
    <h4 className='text-center fw-semibold style-text pe-5 me-5'>Lets Talk About </h4>
          <h3 className='text-center all-text mb-4 ms-5'>Our Vision</h3>
      <Row xs={1} md={2} className='justify-space-between align-items-center text-center py-3'>
      
      <Col lg='6'>
          <img src='https://i.ibb.co/NTb1rvp/vision.jpg' alt='' className='img-fluid rounded-2 mb-3' />
        </Col>
        <Col lg='6' >
          <div>
          
            <p className='text-start'>Our vision is to create a society where individuals are empowered with the knowledge and tools to make informed decisions about their health. We aim to inspire and guide others towards sustainable lifestyle choices that enhance physical, mental, and emotional well-being.Join us in embracing our vision and let us work together to create a healthier, more vibrant world where individuals thrive and flourish in every aspect of their lives.</p>
            
          </div>
        </Col>
        
      </Row>




    </div>

    {/* ========= Join US + Company ========= */}
    <Join/>

  
 
{/* ============ End of main section ========== */}
    </div>

  );
};

export default Home;