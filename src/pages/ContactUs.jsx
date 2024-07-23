import { Button, Col, Container, Row } from "react-bootstrap";
import '../styles/contactus.css';
import contactus from '../assets/contactus.jpg';
import { Form } from "react-bootstrap";
import NavBar from "../components/NavBar";

export default function ContactUs() {
    return (
        <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', padding: '2rem' }}>
            <NavBar />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Row className="w-100">
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div>
                            <h1 className="display-3">We&apos;ll get back to you in a hot minute</h1>
                            <br />
                            <img src={contactus} alt="Contact Us" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Col>

                    <Col md={6} className="d-flex align-items-center justify-content-center" style={{ marginTop: '160px' }}>
                        <Form style={{ width: '100%' }}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label style={{ fontFamily: 'Montserrat, sans-serif' }}>Restaurant Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" style={{ backgroundColor: '#f0f0f0', color: '#333' }}/>
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label style={{ fontFamily: 'Montserrat, sans-serif' }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" style={{ backgroundColor: '#f0f0f0', color: '#333' }}/>
                            </Form.Group>

                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Label style={{ fontFamily: 'Montserrat, sans-serif' }}>Details</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter details" style={{ backgroundColor: '#f0f0f0', color: '#333' }}/>
                            </Form.Group>
                        <br />
                            <Button variant="dark" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
