import { Button, Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { Context } from "../context/Context";
import '../styles/help.css'


export default function Help() {
    
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSent(input);
        setInput(''); 
    };

                // console.log(recentPrompt)

    return(
        <div className="help-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <div className="container mt-5" style={{ 
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                    width: '100%', 
                    maxWidth: '1000px', 
                    padding: '2rem', 
                    paddingTop: '250px', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flex: 1 
                    }}
        >
        <div className="card" style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>
            <div className="card-header fs-2" style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>
                A.I. Customer Support
            </div>
            <div className="card-body">
                <div className="mb-3" style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>
                        
                            <b style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}> {!showResult ? 'How can I help?' : <p>{recentPrompt}</p>} </b> 
                            {loading? 'Loading..' 
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}} style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                                
                            </p>}
                        
                    
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Ask me anything you need help with!"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}
                        />
                    </Form.Group>
                    <Button type="submit" className="mt-3" variant='dark' style={{fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'}}>Send</Button>
                </Form>
                
            </div>
        </div>
    </div>
    </div>
    )
}