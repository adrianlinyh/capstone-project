import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import BookingForm from "../components/BookingForm";
import mapeg from '../assets/mapeg.jpg';
import Footer from "../components/Footer";
import reservationpic2 from '../assets/reservationpic2.jpg';
import businesspic from '../assets/businesspic.jpg';
import value from '../assets/value.jpg';
import { useNavigate } from "react-router-dom";



export default function Home () {

    const navigate = useNavigate();

    const navigateClick = () => {
      navigate(`/profile`);
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
            <p>Your one-stop-hub to all your dining reservation needs. Sign in to your ReservATE account to review and manage your current reservations!</p>
            <br />
            <div className="d-flex align-items-center">
            <Button variant="dark" onClick={navigateClick}>Get started</Button>
            <p className="mb-0" style={{ marginLeft: '1rem' }}>Already have an account? <a href="/signup" className="text-dark">Sign in</a></p>
          </div>
          </Col>
        </Row>

        <br />

        <Row className="my-4">
          <Col md={6} style={{ maxWidth: '620px', padding: '50px', marginLeft: '10px'}}>
            <h1 className="display-3">Want to see your own restaurant here?</h1>
            <br />
            <p>Streamline your establishment&apos;s reservations. Contact us to register and gain access to your own ReservATE administration.</p>
            <div className="d-flex align-items-center">
            <Button variant='dark'>Contact us!</Button>
            <p className="mb-0" style={{ marginLeft: '1rem' }}> <a href="/signup" className="text-dark">Check out our solutions</a></p>
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
            <h1 className="display-3">Always growing for your betterment</h1>
            <br />
            <p>Feedback? Suggestions? Our ears are open! </p>
            <Button variant='dark'>Send us an email</Button>
          </Col>
        </Row>
        <br />


      </Container>
      <Footer />
    </>
  );
}
