// import { getAuth } from "firebase/auth"
// import { AuthContext } from "../components/AuthProvider"

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";


export default function ProfilePage () {

    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) navigate('/profile');
    }, [currentUser, navigate]);


    if (!currentUser) {
        navigate('/signup');
    }

    return (
        <div>Profile Page</div>
    )
}