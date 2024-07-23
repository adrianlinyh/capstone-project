import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SolutionsPage from "./pages/SolutionsPage";
import { AuthProvider } from "./components/AuthProvider";


function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<AuthPage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/solutions" element={<SolutionsPage />} />



          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
  )
}

export default App
