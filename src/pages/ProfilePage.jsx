// import { getAuth } from "firebase/auth"
// import { AuthContext } from "../components/AuthProvider"

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Button, Col, Container, Row } from "react-bootstrap";
import PictureModal from "../components/PictureModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, fetchBookingsByUser } from "../features/posts/postsSlice";
import { AuthContext } from "../components/AuthProvider";
import UpdateBooking from "../components/UpdateBooking";


export default function ProfilePage () {
    const navigate = useNavigate();
    const profileImage = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser ? currentUser.uid : null;

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin');
        }
    }, [currentUser, navigate]);

    

    useEffect(() => {
        dispatch(fetchBookingsByUser(userId)); 
      }, [userId, dispatch]
    );

    console.log(userId);

    if (!currentUser) {
        return null; // Render nothing if currentUser is null
    }
    

    if (loading) {
        return <p>Loading...</p>;
      }


      const handleDelete = (bookingId) => {
        dispatch(deleteBooking(bookingId));
        console.log(bookingId);
      };
    
       


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
        </>
    )
}