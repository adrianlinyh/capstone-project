// import { getAuth } from "firebase/auth"
// import { AuthContext } from "../components/AuthProvider"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import NavBar from "../components/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import PictureModal from "../components/PictureModal";


export default function ProfilePage () {

    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    const profileImage = useState('https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg');
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (currentUser) {
            navigate('/profile');
        } else {
            navigate('/signup');
        }
    }, [currentUser, navigate]);


    return (
        <>
            <NavBar />
                <Container fluid style={{ paddingTop: '150px' }} className='contact-us'>
                    <Row>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <div className="content-left">
                            <img 
                                src={profileImage} 
                                alt="Profile" 
                                style={{ width: '150px', height: '150px', marginBottom: '20px' }}
                                onClick={handleShow} 
                            />
                                <h1>{currentUser?.email}</h1>
                                <PictureModal show={show} handleClose={handleClose} />
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <div className="content-right">
                                <h1>Your Live Reservations</h1>
                                <p>Reservation content</p>
                            </div>
                        </Col>
                    </Row>
                </Container>        
        </>
    )
}