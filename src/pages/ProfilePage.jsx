// import { getAuth } from "firebase/auth"
// import { AuthContext } from "../components/AuthProvider"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, fetchBookingsByUser } from "../features/posts/postsSlice";
import { AuthContext } from "../components/AuthProvider";
import UpdateBooking from "../components/UpdateBooking";
import PictureModal from '../components/PictureModal';


export default function ProfilePage () {
    const navigate = useNavigate();
    const [photoUrl, setPhotoUrl] = useState('https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser ? currentUser.uid : null;
    const [showUploadModal, setShowUploadModal] = useState(false);


    useEffect(() => {
        if (!currentUser) {
            navigate('/signin');
        }
    }, [currentUser, navigate]);

    

    useEffect(() => {
        dispatch(fetchBookingsByUser(userId)); 
      }, [userId, dispatch]
    );

    useEffect(() => {
        if (currentUser?.photoUrl) {
            console.log(currentUser.photoUrl);
            setPhotoUrl(currentUser.photoUrl);
        }
      }, [currentUser])

    console.log(userId);

    if (!currentUser) {
        return null;
    }
    

    if (loading) {
        return <p>Loading...</p>;
      }


      const handleDelete = (bookingId) => {
        dispatch(deleteBooking(bookingId));
        console.log(bookingId);
      };
    
      const handleCloseUpload = () => setShowUploadModal(false);
    const handleShowUpload = () => setShowUploadModal(true);

       
      
      

    return (
        <>
            <NavBar />
                <Container fluid style={{ paddingTop: '150px' }} className='contact-us'>
                    <Row>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <div className="content-left">
                            <h1>{currentUser?.email}</h1>
                            <br />
                            <img 
                                src={photoUrl} 
                                alt="Profile" 
                                style={{ width: '150px', height: '150px', marginBottom: '20px' }}          
                            />
                            <br />
                             <Button variant="primary" onClick={handleShowUpload}>
                                Upload Picture
                            </Button>
                                
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <div className="content-right">
                                <h1>Your Live Reservations</h1>
                                <div className="text-center">
                                    {bookings.length > 0 ? (
                                    bookings.map(booking => { 
                                         
                                    return (

                                        <div key={booking.id}>
                                        <p>Date: {booking.date}</p>
                                        <p>Time: {booking.time}</p>
                                        <p>Pax: {booking.duration}</p>
                                        <Button variant="warning" onClick={handleShow}>Change</Button>
                                        <UpdateBooking show={show} handleClose={handleClose} bookingId={booking.id} userId={userId}/>
                                        <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
                                                        <hr />
                                        </div>
                                    )
                                    })
                                    ) : (
                                    <p>No bookings found.</p>
                                    )}
                                </div>

                            </div>

                        </Col>
                    </Row>
                    
                </Container>        
                <PictureModal show={showUploadModal} handleClose={handleCloseUpload} />
        </>
    )
}