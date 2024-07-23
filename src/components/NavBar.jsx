import { Alert, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { PersonLinesFill } from "react-bootstrap-icons"
import logo2 from '../assets/logo2.jpg';
import '../styles/icon.css';
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";




export default function NavBar() {

    const [showAlert, setShowAlert] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const navigateClick = () => {
      if (currentUser) {
          navigate('/profile');
      } else {
          navigate('/signup');
      }
  };


    const handleLogout = () => {
        auth.signOut().then(() => {
            setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Alert disappears after 2 seconds
    }).catch((error) => {
      console.error('Error during logout:', error);
        });
       }
    
return (
    <>

    <Navbar style={{ 
        backgroundColor: '#000000',
        height: '70px',
        position: 'fixed', // Ensure it stays at the top
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000 // Ensure it is above other content 
        }}>

<Container>
        <Navbar.Brand as={Link} to="/"  className="text-white"><img
            src={logo2} // Replace with your image path
            alt="Logo"
            style={{ height: '50px', width: 'auto' }} // Adjust the height and width as needed
          />
          </Navbar.Brand>
        <Nav className="ms-auto">
          <NavDropdown
            align="end"
            title={<PersonLinesFill size={24} className="text-white" />} // Profile icon
            id="profile-dropdown"
            className='custom-dropdown-menu'
          >
            <NavDropdown.Item onClick={navigateClick} style={{ textAlign: 'center', color: '#000000' }}>Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings" style={{ textAlign: 'center', color: '#000000' }}>Help</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{ textAlign: 'center', color: '#660708' }} onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>

    {showAlert && (
                <Alert variant="dark" style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2000,
                    transition: 'opacity 0.5s ease-in-out',
                    opacity: showAlert ? 1 : 0,
                    padding: '20px', // Adjust padding for better appearance
                    backgroundColor: '#000000', // Solid black background
                    color: '#ffffff', // White text color for contrast
                    fontSize: '1rem', // Adjust font size to match h1 display-1
                    fontFamily: 'Montserrat, sans-serif', // Ensure Montserrat font is used
                    border: '2px solid #ffffff',
                }}>
                    Successfully Logged Out
                </Alert>
            )}

    </>
    )
}