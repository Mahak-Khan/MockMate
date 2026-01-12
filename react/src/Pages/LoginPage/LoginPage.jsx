import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const LoginPage = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        Login to Your Account
      </h1>

      <input
        className="w-full mb-4 px-4 py-2 border rounded outline-none"
        placeholder="Email"
      />

      <input
        className="w-full mb-6 px-4 py-2 border rounded outline-none"
        type="password"
        placeholder="Password"
      />

      {/* Center the Login button */}
      <div className="flex justify-center">
        <Button text="Login" onClick={() => nav('/StartPage')} />
      </div>
    </div>
  )
}

export default LoginPage
