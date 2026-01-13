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
import StartPage from './Pages/StartPage/StartPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import NewLoginPage from './Pages/NewLoginPage/NewLoginPage'
import SelectPage from './Pages/SelectPage/SelectPage'
import HR from './Pages/HR/HR'
import Tech from './Pages/Tech/Tech'
import AnswerReview from './Components/AnswerReview'

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
        <Route path="/startpage" element={<StartPage/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/newloginpage" element={<NewLoginPage/>}/>
        <Route path="/selectpage" element={<SelectPage/>}/>
        <Route path="/hr" element={<HR/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/answerreview" element={<AnswerReview/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
