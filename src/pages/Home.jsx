import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import BookingForm from "../components/BookingForm";
import coworking1 from '../assets/coworking1.jpg';
import Footer from "../components/Footer";
import viewbookmanage from '../assets/viewbookmanage.jpg';
import largespace from '../assets/largespace.jpg';
import testimonial from '../assets/testimonial.jpg';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";



export default function Home () {
  
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateClick = () => {
      if (currentUser) {
          navigate('/profile');
      } else {
          navigate('/signup');
      }
  };

  const handleNavigate = () => {
    navigate('/contact');
};





    return (
        <>
        <NavBar />
       
        <Container style={{ paddingTop: '110px' }}>
        <Row className="my-4">
          <Col md={6}>
            <h1 className="display-3">Book Some Space, Anytime</h1>
            <BookingForm />
            <br />
          </Col>
          <Col md={6}>
            <Image src={coworking1} alt="Map" className="img-fluid" />
            {/* placeholder */}
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6}>
            <Image src={viewbookmanage} alt="Reservation" className="img-fluid" />

          </Col>
          <Col md={6} style={{ maxWidth: '500px', padding: '50px', marginLeft: '60px' }}>
            <h1 className="display-3">View, Book, Manage</h1>
            <br />
            <p>Your One-Stop Hub To All Your Space Reservation Needs. Sign In To Your Space Account To Review And Manage Your Current Bookings!</p>
            <br />
            <div className="d-flex align-items-center">
            <Button variant="dark" onClick={navigateClick}>Get Started</Button>
            <p className="mb-0" style={{ marginLeft: '1rem' }}>Already Have an Account? <a href="/signin" className="text-dark">Sign In</a></p>
          </div>
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6} style={{ maxWidth: '620px', padding: '50px', marginLeft: '10px'}}>
            <h1 className="display-3">Large Events?</h1>
            <br />
            <p>Streamline Your Establishment&apos;s Spacial Needs. Contact Us To Tailor and Gain Access to Your Own Spacial Needs.</p>
            <div className="d-flex align-items-center">
            <Button variant='dark' onClick={handleNavigate}>Contact Us</Button>
            <p className="mb-0" style={{ marginLeft: '1rem' }}> <a href="/solutions" className="text-dark">Check Out Our Solutions</a></p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={largespace} style={{ marginLeft: '3rem', width: 'auto', height: 'auto' }} alt="Business" className="img-fluid" />
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6}>
            <Image src={testimonial} style={{ marginLeft: '2rem' }} alt="Membership" className="img-fluid" />
          </Col>
          <Col md={6} style={{ maxWidth: '550px', padding: '50px', marginLeft: '50px' }}>
            <h1 className="display-3">Size Doesn&apos;t Matter Here</h1>
            <br />
            <p>From Start-Ups To Establishments From Abroad, Space Has Accommodated To All.</p>

            <Button variant='dark'>Testimonials</Button>
          </Col>
        </Row>
        <br />


      </Container>
      <Footer />
    </>
  );
}
