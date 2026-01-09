import React from 'react'
import { LuBrainCircuit } from "react-icons/lu";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-25 text-center gap-3">
      <div className="text-white">
        <LuBrainCircuit size={80} />
      </div>

      <h1 className="text-white text-5xl font-bold animate-pulse">
        Welcome to MockMate
      </h1>

      <h2 className="text-white font-medium text-xl px-6 py-3 bg-black rounded-full">
        Your AI-Powered Mock Interview Companion
      </h2>
    </div>
  )
}

export default Start
