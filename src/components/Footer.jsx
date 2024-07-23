import { Col, Container, Row } from 'react-bootstrap';

export default function Footer () {
    return (
        <footer className="text-white py-4" style={{ backgroundColor: '#000000', marginTop: '30px'}}>
          <Container style={{ paddingTop: '40px' }}>
            <Row>
              <Col md={3}>
                <h5>ReservATE</h5>
                <p>Created by Adrian L. in 2024</p>
              </Col>

              <Col md={3}>
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>About us</li>
                  <li>Newsroom</li>
                  <li>Investors</li>
                  <li>Careers</li>
                </ul>
              </Col>

              <Col md={3}>
                <h5>Offerings</h5>
                <ul className="list-unstyled">
                  <li>Reservations</li>
                  <li>Pre-book Meals</li>
                  <li>Business Events</li>
                  <li>Careers</li>
                </ul>
              </Col>

              <Col md={3} className="d-flex flex-column align-items-end">
                <h5>Contact Us</h5>
                <p>Email: linyh.adrian@gmail.com</p>
                <p>Phone: +60 12 424 6808</p>
              </Col>
            </Row>

            <Row className="my-4 text-center" style={{ paddingTop: '40px' }}>
                    <Col md={1} className="d-flex justify-content-center">
                        <i className="bi bi-facebook"></i>
                    </Col>
                    <Col md={1} className="d-flex justify-content-center">
                        <i className="bi bi-instagram text-white"></i>
                    </Col>
                    <Col md={1} className="d-flex justify-content-center">
                        <i className="bi bi-linkedin text-white"></i>
                    </Col>
                    <Col md={1} className="d-flex justify-content-center">
                        <i className="bi bi-twitter text-white"></i>
                    </Col>
                    <Col md={1} className="d-flex justify-content-center">
                        <i className="bi bi-youtube text-white"></i>
                    </Col>
                </Row>

            <Row style={{ paddingTop: '40px' }}>
              <Col className="d-flex justify-content-start mt-4" >
                <p>&copy; 2024 ReservATE</p>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    }
    