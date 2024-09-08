import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import BloodCenter from "./pages/blood-donation-center";
import ChatBot from "./pages/chat-bot-feature";
import BloodForm from "./pages/blood-form";
 



const App: FC = () => {

  return (
    <>
    <div>
     
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/blood-bank" element={<BloodCenter/>}/>
        <Route path="/chat-bot" element={<ChatBot/>}/>
        <Route path="/blood-form" element={<BloodForm/>}/>
      </Routes>
      
    </div>
    </>
  )
}
export default App