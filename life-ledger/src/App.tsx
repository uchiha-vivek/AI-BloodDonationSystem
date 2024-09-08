import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import BloodCenter from "./pages/blood-donation-center";
import ChatBot from "./pages/chat-bot-feature";
import BloodForm from "./pages/blood-form";
import Login from "./pages/login";
import RegisterPage from "./pages/register";
import WelcomeForm from "./components/welcome-form";
import PrivateRoute from "./pages/protected-route";
 



const App: FC = () => {

  return (
    <>
    <div>
     
      <Routes>
      <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/blood-bank" element={<BloodCenter/>}/>
        <Route path="/chat-bot" element={<ChatBot/>}/>
        <Route path="/blood-form" element={<BloodForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/welcome" element={<WelcomeForm/>}/>
      </Routes>
      
    </div>
    </>
  )
}
export default App