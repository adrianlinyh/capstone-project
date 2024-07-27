import { useContext, useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/icon.css';
import NavBar from '../components/NavBar';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import { AuthContext } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) navigate('/profile');
    }, [currentUser, navigate]);

   
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
        } catch (error) {
            console.error(error);
        }
    }

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async(e) => {
        e.preventDefault();
        try{
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    }


  const handleNavigate =() => {
    navigate('/signup')
  }

  return (
    <>
    <NavBar />
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh', backgroundColor: 'white', paddingTop: '200px' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="p-4 text-center">
            <Form onSubmit={handleLogin}>
              {/* Email Section */}
              <div className="mb-4">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                  <h1 className="mb-3 display-1" style={{ width: '100%', textAlign: 'center', fontSize: '3rem' }}>Welcome Back!</h1>
                  <br />
                  <Form.Group controlId="formEmail" className="text-center">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ backgroundColor: '#f0f0f0', color: '#333' }} 
                    />
                  </Form.Group>
                </Col>
              </div>

              {/* Password Section */}
              <div className="mb-4">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                  <Form.Group controlId="formPassword" className="text-center">
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ backgroundColor: '#f0f0f0', color: '#333' }} 
                    />
                  </Form.Group>
                </Col>
              </div>

              <Col xs={12} md={8} lg={6} className="mx-auto">

              <Button variant="dark" type="submit" className="w-100 mt-3">
                Sign In
              </Button>
              </Col>

              <div className="my-4 text-center">
              <Col xs={12} md={8} lg={6} className="mx-auto">
                  <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ flex: 1, border: '1px solid #ccc' }} />
                    <span className="mx-2">or</span>
                    <hr style={{ flex: 1, border: '1px solid #ccc' }} />
                  </div>
                </Col>
                </div>

                <Col xs={12} md={8} lg={6} className="mx-auto">
                <Button className='w-100 mt-3' variant='dark' onClick={handleGoogleLogin}>
                    <i className='bi bi-google'></i>  Sign In with Google
                </Button>
                </Col>

                <div className="my-4 text-center">
              <Col xs={12} md={8} lg={6} className="mx-auto">
                  <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ flex: 1, border: '1px solid #ccc' }} />
                    <span className="mx-2">or</span>
                    <hr style={{ flex: 1, border: '1px solid #ccc' }} />
                  </div>
                </Col>
                </div>

                <Col xs={12} md={8} lg={6} className="mx-auto">
                <p className='mb-3' style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        New Here?
                    </p>
                    <Button className='w-100 mt-3' variant='dark' onClick={handleNavigate}>Sign Up</Button>
                </Col>

            </Form>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}
