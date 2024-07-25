import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import BookingForm from "../components/BookingForm";
import mapeg from '../assets/mapeg.jpg';
import Footer from "../components/Footer";
import reservationpic2 from '../assets/reservationpic2.jpg';
import businesspic from '../assets/businesspic.jpg';
import value from '../assets/value.jpg';
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
       
        <Container style={{ paddingTop: '120px' }}>
        <Row className="my-4">
          <Col md={6}>
            <h1 className="display-3">Book a table anytime, with ReservATE</h1>
            <BookingForm />
            <br />
          </Col>
          <Col md={6}>
            <Image src={mapeg} alt="Map" className="img-fluid" />
            {/* placeholder */}
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6}>
            <Image src={reservationpic2} style={{ marginLeft: '20px' }}alt="Reservation" className="img-fluid" />

          </Col>
          <Col md={6} style={{ maxWidth: '500px', padding: '50px', marginLeft: '60px' }}>
            <h1 className="display-3">View, Book, Manage</h1>
            <br />
            <p>Your One-Stop Hub To All Your Dining Reservation Needs. Sign In To Your ReservATE Account To Review And Manage Your Current Reservations!</p>
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
            <h1 className="display-3">Want to see your own restaurant here?</h1>
            <br />
            <p>Streamline Your Establishment&apos;s Reservations. Contact Us To Register and Gain Access to Your Own ReservATE Administration.</p>
            <div className="d-flex align-items-center">
            <Button variant='dark' onClick={handleNavigate}>Contact Us</Button>
            <p className="mb-0" style={{ marginLeft: '1rem' }}> <a href="/solutions" className="text-dark">Check Out Our Solutions</a></p>
            </div>
          </Col>
          <Col md={6}>
            <Image src={businesspic} style={{ marginLeft: '6rem', width: 'auto', height: 'auto' }} alt="Business" className="img-fluid" />
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6}>
            <Image src={value} style={{ marginLeft: '2rem' }} alt="Membership" className="img-fluid" />
          </Col>
          <Col md={6} style={{ maxWidth: '550px', padding: '50px', marginLeft: '50px' }}>
            <h1 className="display-3">Catch our latest financial insights</h1>
            <br />
            <p>Dive into the Numbers Driving Our Success. It&apos;s Money Well Spent!</p>

            <Button variant='dark'>Click Here</Button>
          </Col>
        </Row>
        <br />


      </Container>
      <Footer />
    </>
  );
}
