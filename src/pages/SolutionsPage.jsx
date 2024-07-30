import { Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../components/NavBar";
import '../styles/contactus.css';
import privateoffice from '../assets/privateoffice.jpg';
import officefloor from '../assets/officefloor.jpg';
import privateroom from '../assets/privateroom.jpg';
import accesscard from '../assets/accesscard.jpg';
import addsolutions from '../assets/addsolutions.jpg';
import Footer from "../components/Footer";

export default function SolutionsPage() {
    return (
        <div style={{ backgroundColor: '#000000', minHeight: '100vh', overflowX: 'hidden' }}>
            <NavBar />
            <Container className='mt-5 pt-5'>
                <Row className='mb-5'>
                    <Col md={10}>
                        <h1 className='display-2' style={{ color: '#ffffff' }}>Private Workspaces</h1>
                        <h3 style={{ color: '#ffffff', fontFamily: 'Segoe UI Light, Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Fully furnished offices for individuals and teams.</h3>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={10}>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Image src={privateoffice} className="d-block w-100" alt="Private Office" />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '5px', borderRadius: '5px' }}>
                                        <h5 style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Dedicated Desk</h5>
                                        <p style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Have Your Own Desk in A Shared Office</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={privateroom} className="d-block w-100" alt="Private Room" />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '5px', borderRadius: '5px' }}>
                                        <h5 style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Private Office</h5>
                                        <p style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>A Larger Private Office With Private Amenities</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={officefloor} className="d-block w-100" alt="Office Floor" />
                                    <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '5px', borderRadius: '5px' }}>
                                        <h5 style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Full Floor Office</h5>
                                        <p style={{ color: '#F5F5F5', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>A Private Floor, For You And Your Team</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Col>
                </Row>
                <hr style={{ borderColor: '#ffffff' }} />

                <Row className='mb-5'>
                    <Col md={10}>
                        <h1 className='display-2' style={{ color: '#ffffff' }}>Flexi-Access</h1>
                        <h3 style={{ color: '#ffffff', fontFamily: 'Segoe UI Light, Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Shared Space You Can Access On A Monthly Basis</h3>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={10}>
                        <Container>
                            <img src={accesscard} className="d-block w-100" alt="Access Card" />
                        </Container>
                    </Col>
                </Row>
                <hr style={{ borderColor: '#ffffff' }} />

                <Row className='mb-5'>
                    <Col md={10}>
                        <h1 className='display-2' style={{ color: '#ffffff' }}>Additional Solutions</h1>
                        <h3 style={{ color: '#ffffff', fontFamily: 'Segoe UI Light, Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Event Spaces, Study Groups, Exhibitions</h3>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={10}>
                        <Container>
                            <img src={addsolutions} className="d-block w-100" alt="Additional Solutions" />
                        </Container>
                    </Col>
                </Row>
                <hr style={{ borderColor: '#ffffff', marginBottom: '300px' }}/>

            </Container>
            <Footer />
        </div>
    );
}
