import React from 'react'
import HomePic from '../../ImgVideos/HomePic.png'


const Home = () => {

  return (
    <div className='flex flex-row '>
      <div className='w-1/2 min-h-[calc(100vh-6rem-4rem)] p-10 flex flex-col gap-2 justify-center ml-15'>
        <h1 className='text-6xl font-bold text-white hover:scale-105'>Your <span className='text-blue-500'>Resume</span></h1>
        <h1 className='text-6xl font-bold text-white hover:scale-105 mt-1'>Your Interview</h1>
        <h1 className='text-6xl font-bold text-white hover:scale-105 mt-1'>Powered by <span className='text-blue-500'>AI</span></h1>
        <p className='text-white text-2xl mt-4'>Practice smart mock interviews based on your resume, <br /> technical skills, and HR scenarios.</p>
      </div>
      <div className='w-1/2 min-h-[calc(100vh-6rem-4rem)] justify-center items-center flex'>
        <img src={HomePic} alt="Home" className="h-full" />
      </div>
    </div>
  )
}

export default Home
