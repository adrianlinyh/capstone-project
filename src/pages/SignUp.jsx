import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/icon.css'; // Import your CSS file
import NavBar from '../components/NavBar';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password });
  };

  return (
    <>
    <NavBar />
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh', backgroundColor: 'white', paddingTop: '200px' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className="p-4 text-center">
            <Form onSubmit={handleSubmit}>
              {/* Email Section */}
              <div className="mb-4">
                <Col xs={12} md={8} lg={6} className="mx-auto">
                  <h1 className="mb-3" style={{ width: '100%', textAlign: 'center' }}>We&apos;re excited to have you!</h1>
                  <i className="bi bi-person-square icon"></i>
                  <Form.Group controlId="formEmail" className="text-center">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ backgroundColor: '#f0f0f0', color: '#333' }} // Light gray background
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
                      placeholder="Set your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ backgroundColor: '#f0f0f0', color: '#333' }} // Light gray background
                    />
                  </Form.Group>
                </Col>
              </div>

              <Col xs={12} md={8} lg={6} className="mx-auto">

              <Button variant="dark" type="submit" className="w-100 mt-3">
                Create an account
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
                <Button className='w-100 mt-3' variant='dark'>
                    <i className='bi bi-google'></i>  Sign up with Google
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
                <p className='mb-3'>
                        Already have an account?
                    </p>
                    <Button className='w-100 mt-3' variant='dark'>Sign In</Button>
                </Col>

            </Form>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}
