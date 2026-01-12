import React from 'react'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import HRquest from '../../ImgVideos/HRquest.png'
import Techquest from '../../ImgVideos/Techquest.png'

const cardClass =
  "text-center w-1/2 p-5 bg-white/40 backdrop-blur-xl backdrop-saturate-150 " +
  "border border-white/40 shadow-2xl z-50 rounded-2xl";

const SelectPage = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-1 mt-2">

      {/* HR Section */}
      <div className="flex flex-row pl-60 items-center">
        <div className={cardClass}>
          <p className="mb-4 text-black">
            HR questions focus on your personality, communication skills, work ethic,
            and how well you fit into a company’s culture. These questions help
            interviewers understand your mindset, strengths, and career goals.
          </p>
          <Button text="HR Questions" onClick={() => nav('/HR')} />
        </div>

        <div>
          <img
            src={HRquest}
            alt="HR"
            className="h-56 object-contain"
          />
        </div>
      </div>

      {/* Technical Section */}
      <div className="flex flex-row items-center pl-60">
        <div>
          <img
            src={Techquest}
            alt="Tech"
            className="h-56 object-contain"
          />
        </div>

        <div className={cardClass}>
          <p className="mb-4 text-black">
            Technical questions test your subject knowledge, problem-solving ability,
            and understanding of core concepts related to your field. They help
            interviewers evaluate how well you can apply theory to real-world problems.
          </p>
          <Button text="Technical Questions" onClick={() => nav('/Tech')} />
        </div>
      </div>
    </div>
  )
}

export default SelectPage
