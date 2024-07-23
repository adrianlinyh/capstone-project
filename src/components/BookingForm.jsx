import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function BookingForm() {
  return (
    <Form style={{ paddingTop: '20px' }}>
      <Form.Group controlId='booking'>
        <Row>
          <Col xs={6} md={4}>
            <Form.Control
              type="date"
              placeholder="Date in mm/dd (e.g: 23/10)"
            />
          </Col>

          <Col xs={6} md={4}>
            <Form.Control
              type="time"
              placeholder="Time in 24h (e.g: 14:00)"
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
            />
          </Col> 
          <Col xs={6} md={4} className="d-flex align-items-center">
            <span style={{ marginLeft: '3rem' }}>T&C Apply</span>
          </Col>
        </Row>
        <br />
        
      </Form.Group>
      <Button variant='dark'>Submit</Button>
    </Form>
  );
}
