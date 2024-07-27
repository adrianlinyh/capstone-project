import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import '../styles/contactus.css'


export default function SolutionsPage () {
    return (
        <>
            <NavBar />
            <Container fluid style={{ paddingTop: '150px' }} className='contact-us'>
                <Row>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div className="content-left">
                            <h1>Left Column Content</h1>
                            <p>This is the left column. Add your content here.</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <div className="content-right">
                            <h1>Right Column Content</h1>
                            <p>This is the right column. Add your content here.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </>
    )
}