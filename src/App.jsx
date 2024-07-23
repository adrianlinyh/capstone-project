import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SolutionsPage from "./pages/SolutionsPage";
import { AuthProvider } from "./components/AuthProvider";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";


function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactUs />} />




          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App
