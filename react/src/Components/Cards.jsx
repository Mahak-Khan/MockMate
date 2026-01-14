import React from 'react'

const Cards = ({icon, heading, subheading, bgColor}) => {
  return (
    <div>
      <div className={`w-60 p-3 h-50 mt-6 rounded-2xl hover:scale-110 ${bgColor}`}>
        <h1 className='rounded-full h-13 p-1 flex justify-center items-center w-13'>{icon}</h1>
        <h1 className='font-semibold text-2xl mt-5'>{heading}</h1>
        <h1 className='mt-5'>{subheading}</h1>
      </div>
    </div>
  )
}

export default Cards
