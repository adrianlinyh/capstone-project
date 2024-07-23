import { Navbar } from "react-bootstrap"

export default function NavBar() {
return (

    <Navbar style={{ 
        backgroundColor: '#000000',
        height: '70px',
        position: 'fixed', // Ensure it stays at the top
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000 // Ensure it is above other content 
        }}>
    </Navbar>
    )
}