import React from 'react'
import Button from '../../Components/Button.jsx'


const Feedback = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=' bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-2xl w-1/2 h-100 rounded-2xl p-10 mt-10 '>
        <h1 className='flex justify-center items-center text-4xl font-bold'>How can us improve?</h1>
        <textarea className='w-full h-35 resize-none overflow-y-auto p-4 mt-10 border-black/30 border-2 outline-none rounded-2xl' placeholder='Write your suggestion here...'></textarea>
        <div className='flex justify-center items-center mt-10 '>
          <Button text="Submit" />
          </div>
      </div>
    </div>
  )
}

export default Feedback
