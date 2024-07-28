import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { PersonLinesFill } from "react-bootstrap-icons"
import logo3 from '../assets/logo3.png';
import '../styles/icon.css';
import { auth } from "../firebase";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Bounce, toast } from "react-toastify";




export default function NavBar() {


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
        toast.info('Successfully Logged Out!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            style: { fontFamily: 'Segoe UI, sans-serif', fontSize: '1rem' } 
        });
    }).catch((error) => {
        console.error('Error during logout:', error);
    });
}


       const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    
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
                    <Navbar.Brand
                        as="div" // Use div to handle onClick event
                        onClick={() => {
                            scrollToTop(); // Scroll to top on click
                            navigate("/"); // Navigate to home
                        }}
                        className="text-white"
                        style={{ cursor: 'pointer' }} // Pointer cursor for click
                    ><img
            src={logo3} // Replace with your image path
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
            <NavDropdown.Item href="#settings" style={{ textAlign: 'center', color: '#000000' }} as={Link} to="/help">Help (A.I.)</NavDropdown.Item>
            {currentUser && (
                            <>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{ textAlign: 'center', color: '#660708' }} onClick={handleLogout}>Logout</NavDropdown.Item>
                            </>
                        )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>

    </>
    )
}