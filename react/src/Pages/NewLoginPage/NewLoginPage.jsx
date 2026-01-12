import React, { useState } from 'react'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const NewLoginPage = () => {
  const nav = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-2xl w-1/3 rounded-2xl p-10 mt-10'>
          
          <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">
            Login to Continue
          </h1>

          <input
            className="w-[90%] mb-4 px-4 py-2 border rounded outline-none"
            placeholder="Email"
          />

          <input
            className="w-[90%] mb-4 px-4 py-2 border rounded outline-none"
            type="password"
            placeholder="Password"
          />

          {/* Remember Me */}
          <div className="w-[90%] flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-700 cursor-pointer">
              Remember me
            </label>
          </div>
          <Button text="Login" onClick={() => nav('/StartPage')} />
        </div>
      </div>
    </div>
  )
}

export default NewLoginPage
