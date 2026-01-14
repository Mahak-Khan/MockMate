import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-row gap-5'>
      <div className='flex flex-col w-1/3 bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50'>
        <img>Round Profile pic</img>
        <h1>Hey, User</h1>
        <h1>Performance in HR 20%</h1>
        <h1>Performance in Tech 40%</h1>
        <h1>Overall 33%</h1>
        <button>Reset Progress</button>
      </div>
      <div className='flex flex-col gap-3'>
        <h1>Pi chart for Hr</h1>
        <h1>Pi chart for tech</h1>
      </div>
    </div>
  )
}

export default Profile
