import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { saveBooking } from "../features/posts/postsSlice";
import { AuthContext } from "./AuthProvider";

export default function BookingForm() {

  const [bookingDate, setBookingDate] = useState('');
    const dispatch = useDispatch();
    const [bookingTime, setBookingTime] = useState(''); 
    const [bookingDuration, setBookingDuration] = useState(''); 
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser ? currentUser.uid : null;


    const handleSubmit = () => {
      dispatch(saveBooking( { userId, bookingDate, bookingTime, bookingDuration }));
      setBookingDate('');
      setBookingTime('');
      setBookingDuration('');
    };


  return (
    <Form style={{ paddingTop: '20px' }}>
      <Form.Group controlId='booking'>
        <Row>
          <Col xs={6} md={4}>
            <Form.Control
              type="date"
              placeholder="Date in mm/dd (e.g: 23/10)"
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </Col>

          <Col xs={6} md={4}>
            <Form.Control
              type="time"
              placeholder="Time in 24h (e.g: 14:00)"
              onChange={(e) => setBookingTime(e.target.value)}
            />
          </Col>
        </Row>
        <br />

        <Row>
          <Col xs={6} md={4}>
            <Form.Control
              type="number"
              placeholder="Pax"
              min="1"
              max="1000"
              onChange={(e) => setBookingDuration(e.target.value)}
            />
          </Col> 
          <Col xs={6} md={4} className="d-flex align-items-center">
            <span style={{ marginLeft: '3rem' }}>T&C Apply</span>
          </Col>
        </Row>
        <br />
        
      </Form.Group>
      <Button variant='dark' onClick={handleSubmit}>Submit</Button>
    </Form>
    
    
  );
}
