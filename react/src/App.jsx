import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Start from './Pages/Start/Start'
import Bg from './Bg/Bg'
import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import GetStarted from './Pages/GetStarted/GetStarted'
import HowtoUse from './Pages/HowtoUse/HowtoUse'
import ContactUs from './Pages/ContactUs/ContactUs'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'

const App = () => {
  return (
    <>
      <Bg />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/howToUse" element={<HowtoUse />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
