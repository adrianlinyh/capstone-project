import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, fetchBookingsByUser } from "../features/posts/postsSlice";
import { AuthContext } from "../components/AuthProvider";
import UpdateBooking from "../components/UpdateBooking";
import { Bounce, toast } from "react-toastify";
import Footer from "../components/Footer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { getAuth, updateProfile } from "firebase/auth";

export default function ProfilePage() {
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
    
    const [imagePreview, setImagePreview] = useState(null);
    const [isProfilePicChanged, setIsProfilePicChanged] = useState(false);
    const [changeDetail, setChangeDetail] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        if (!currentUser) {
            navigate('/signin');
        } else if (currentUser?.photoURL) {
            setPhotoUrl(currentUser.photoURL);
        }
    }, [currentUser, navigate]);
    
    useEffect(() => {
        if (userId) {
            dispatch(fetchBookingsByUser(userId));
        }
    }, [userId, dispatch, bookings]);

    if (!currentUser) {
        return null;
    }
    
    if (loading) {
        return <p>Loading...</p>;
    }

    const handleDelete = (bookingId) => {
        dispatch(deleteBooking(bookingId));
        toast.info('Booking deleted', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
            style: { fontFamily: 'Segoe UI, sans-serif', fontSize: '1rem' } 
        });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
    
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setIsProfilePicChanged(true);
        };
        reader.readAsDataURL(file);
    };

    const uploadProfilePicture = async (file) => {
        const storageRef = ref(storage, `profilePictures/${userId}`);
        const snapshot = await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(snapshot.ref);
        return photoURL;
    };

    const submitChanges = async () => {
        try {   
            let updatedPhotoURL = currentUser.photoURL;
            if (isProfilePicChanged && imagePreview) {
                const file = await fetch(imagePreview).then(r => r.blob());
                updatedPhotoURL = await uploadProfilePicture(file);
            }
    
            // Update in Firebase Auth
            await updateProfile(auth.currentUser, {
                photoURL: updatedPhotoURL
            });
    
        } catch (error) {
            toast.error("Failed to update the profile details.");
        } finally {
            setIsProfilePicChanged(false);
            setImagePreview(null); 
        }
    };

    const handleImageUpload = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <>
            <NavBar />
            <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
                <Container>
                    <Row>
                        <Col md={6} className="d-flex flex-column align-items-center mt-5">
                            <h1 className="display-3 mb-4" style={{ marginTop: '2rem' }}>Your Profile</h1>
                            <input 
                                type="file" 
                                id="fileInput" 
                                className="d-none" 
                                onChange={handleImageChange}
                                accept=".jpeg, .png, .jpg" 
                                disabled={!changeDetail}
                            />
                            <div className="d-flex justify-content-center">
                                <div 
                                    className="position-relative" 
                                    style={{ width: '400px', height: '400px' }} 
                                    onClick={handleImageUpload}
                                >
                                    {imagePreview ? 
                                        <img src={imagePreview} className="w-100 h-100 object-fit-cover" alt="Profile Preview" />
                                        : currentUser.photoURL ? (
                                            <img src={currentUser.photoURL} className="w-100 h-100 object-fit-cover" alt="Profile" />
                                        ) : (
                                            <img src={photoUrl} className="w-100 h-100 object-fit-cover" alt="Default Profile" />
                                        )
                                    }
                                    {changeDetail && (
                                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                                            <span className="text-white fs-5">Upload Profile Pic</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Container style={{ paddingTop: '20px' }}>
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <form>   
                                            <div className="d-flex justify-content-between align-items-center text-sm">
                                            <Button 
                                                variant="dark" 
                                                onClick={() => {
                                                    changeDetail && submitChanges();
                                                    setChangeDetail(prevState => !prevState);
                                                }}
                                            >
                                                {changeDetail ? "Save" : "Add Profile Picture"}
                                            </Button>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                        <Col md={6} className="d-flex flex-column align-items-center">
                            <h1 className="display-4 mb-4 pt-5 mt-5">Your Live Reservations</h1>
                            <div className="text-center">
                                {bookings.length > 0 ? (
                                    bookings.map(booking => (
                                        <div key={booking.id} className="mb-4">
                                            <p>Date: {booking.date}</p>
                                            <p>Time: {booking.time}</p>
                                            <p>Pax: {booking.duration}</p>
                                            <Button variant="light" onClick={handleShow}>Change</Button>
                                            <UpdateBooking show={show} handleClose={handleClose} bookingId={booking.id} userId={userId}/>
                                            <Button variant="dark" onClick={() => handleDelete(booking.id)}>Delete</Button>
                                            <hr />
                                        </div>
                                    ))
                                ) : (
                                    <p>No bookings found.</p>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />        
            </div>
        </>
    );
}
