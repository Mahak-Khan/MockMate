import React from 'react'
import ContactUsPic from '../../ImgVideos/ContactUsPic.png'
import Button from '../../Components/Button.jsx'

const ContactUs = () => {
  return (
    <div>
      <div className='w-5xl h-90 bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-2xl mt-15 ml-45 rounded-2xl flex flex-row'>
        <div className='w-1/2'>
          <form className='flex flex-col gap-2 justify-center items-center mt-4'>
            <h1 className='flex justify-center items-center text-4xl font-bold mb-3'>Contact Us</h1>
            <input type="text" placeholder="Your Name" className="w-1/2  p-2 outline-none  border-2 border-black/30 shadow-2xl rounded-2xl flex flex-row" />
            <input type="text" placeholder="Your Email" className="w-1/2 p-2 outline-none  border-2 border-black/30 shadow-2xl rounded-2xl flex flex-row" />
            <textarea
              placeholder="Your Message"
              className="w-1/2  border-2 border-black/30 shadow-2xl rounded-2xl outline-none h-20 p-3 resize-none"/>
            <Button text="Send Message" />
          </form>
        </div>
        <div className='w-1/2 h-90'>
          <img src={ContactUsPic} alt="Home" className="h-full" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
