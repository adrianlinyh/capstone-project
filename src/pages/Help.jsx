import { Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { Context } from "../context/Context";
import '../styles/help.css'


export default function Help() {
    
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onSent(input);
        setInput(''); 
    };

                // console.log(recentPrompt)

    return(
        <div className="help-page">
        <NavBar />
        <div className="container my-5" style={{paddingTop: '200px', fontFamily: 'Segoe UI, sans-serif'}}>
        <div className="card" style={{fontFamily: 'Segoe UI, sans-serif'}}>
            <div className="card-header fs-4" style={{fontFamily: 'Segoe UI, sans-serif'}}>
                A.I. Help Bot
            </div>
            <div className="card-body">
                <div className="mb-3" style={{fontFamily: 'Segoe UI, sans-serif'}}>
                        
                            <b style={{fontFamily: 'Segoe UI, sans-serif'}}> {!showResult ? 'How can I help?' : <p>{recentPrompt}</p>} </b> 
                            {loading? 'Loading..' 
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}} style={{fontFamily: 'Segoe UI, sans-serif'}}>
                                
                            </p>}
                        
                    
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Ask me anything you need help with!"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            style={{fontFamily: 'Segoe UI, sans-serif'}}
                        />
                    </Form.Group>
                    <Button type="submit" className="mt-3" variant='dark' style={{fontFamily: 'Segoe UI, sans-serif'}}>Send</Button>
                </Form>
                
            </div>
        </div>
    </div>
    </div>
    )
}