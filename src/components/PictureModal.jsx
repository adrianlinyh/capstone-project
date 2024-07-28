import { Button, Form, Modal, Alert } from "react-bootstrap";
import { savePost } from "../features/posts/postsSlice";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

export default function PictureModal({ show, handleClose }) {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;
    
    // Handle successful or failed save

    const handleSave = async () => {
        if (!file) {
            setError("Please select a file.");
            return;
        }

        setError(null);
        setLoading(true);
        
        try {
            await dispatch(savePost({ userId, file })).unwrap();
            handleClose();
            setFile(null);
        } catch (err) {
            setError("Failed to upload image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null); 
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Form.Group controlId='postContent'>
                            <Form.Control 
                                type='file' 
                                onChange={handleFileChange} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant='secondary' 
                        onClick={() => {
                            handleClose();
                            setFile(null);
                        }}
                    >
                        Close
                    </Button>
                    <Button 
                        variant='dark' 
                        onClick={handleSave} 
                        disabled={loading}
                    >
                        {loading ? "Uploading..." : "Upload"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
