import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SolutionsPage from "./pages/SolutionsPage";
import { AuthProvider } from "./components/AuthProvider";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import store from "./store";
import Help from "./pages/Help";
import ContextProvider from "./context/Context";


function App() {

  return (
    <AuthProvider>
          <Provider store = {store}>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/help" element={
            <ContextProvider>
              <Help />
            </ContextProvider>
}         />
        
        </Routes>
      </BrowserRouter>
      </Provider>

      </AuthProvider>
  )
}

export default App
