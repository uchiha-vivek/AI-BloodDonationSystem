import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BloodCenter from "./pages/blood-donation-center";




const App: FC = () => {

  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/blood-bank" element={<BloodCenter/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}
export default App