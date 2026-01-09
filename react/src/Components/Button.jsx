import React from 'react'

const Button = ({ text, onClick}) => {
  return (
    <div>
      <button className='bg-black text-white px-6 py-2 rounded-lg cursor-pointer hover:scale-105 mt-4' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
