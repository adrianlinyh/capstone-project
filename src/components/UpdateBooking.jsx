import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateBooking } from "../features/posts/postsSlice";
import { toast } from "react-toastify";


export default function UpdateBooking({show, handleClose, userId, bookingDate, bookingTime, bookingDuration, bookingId}) {

        const dispatch = useDispatch();

        const [newBookingDate, setNewBookingDate] = useState(bookingDate || '');
        const [newBookingTime, setNewBookingTime] = useState(bookingTime || '');
        const [newBookingDuration, setNewBookingDuration] = useState(bookingDuration || '');
    

        const handleUpdate = () => {
            dispatch(updateBooking({bookingId, newBookingDate, newBookingTime, newBookingDuration, userId })); 
            setNewBookingDate(newBookingDate);
            setNewBookingTime(newBookingTime);
            setNewBookingDuration(newBookingDuration);
            handleClose();

            
            toast.success('Booking updated successfully!', {
              position: "bottom-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
              style: { fontFamily: 'Segoe UI, sans-serif', fontSize: '1rem' } 
          });
          };
    
        return (
          <>
           <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Booking</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
              <Form>
                <Form.Group controlId="bookingDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newBookingDate}
                  onChange={(e) => setNewBookingDate(e.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="bookingTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={newBookingTime}
                    onChange={(e) => setNewBookingTime(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="bookingDuration">
                  <Form.Label>Duration (hours)</Form.Label>
                  <Form.Control
                    type="number"
                    value={newBookingDuration}
                    onChange={(e) => setNewBookingDuration(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpdate}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          </>
        );
    }
    