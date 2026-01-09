import React from 'react'
import Cards from '../../Components/Cards'
import { VscSignIn } from "react-icons/vsc";
import { IoMdLogIn } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { BiSolidAnalyse } from "react-icons/bi";


const HowtoUse = () => {
  return (
    <div className=''>
      <div className='flex flex-row gap-5 ml-75'>
        <Cards
          icon={<VscSignIn size={45} />}
          heading="Sign Up"
          subheading="Create your account to begin interview preparation"
          bgColor="bg-blue-500/60 backdrop-blur-xl backdrop-saturate-150
        border border-blue-500/60 shadow-2xl z-50"
        />
        <Cards
          icon={<IoMdLogIn size={45} />}
          heading="Login"
          subheading="Access your dashboard and saved progress"
          bgColor="bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50"
        />
        <Cards
          icon={<MdCloudUpload size={45} />}
          heading="Upload Resume"
          subheading="Upload your resume for personalized practice"
          bgColor="bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50"
        />
      </div>

      <div className='flex flex-row gap-5 ml-75'>
        <Cards
          icon={<FaHourglassStart size={38} />}
          heading="Start Practice"
          subheading="Begin mock interviews tailored to your profile"
          bgColor="bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50"
        />
        <Cards
          icon={<BiSolidAnalyse size={45} />}
          heading="Review"
          subheading="Analyze feedback and improve your answers"
          bgColor="bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50"
        />
        <Cards
          icon={<FaHistory size={45} />}
          heading="Check Progress"
          subheading="Track performance and growth over time"
          bgColor="bg-blue-500/60 backdrop-blur-xl backdrop-saturate-150
        border border-blue-500/60 shadow-2xl z-50"
        />
      </div>

    </div>
  )
}

export default HowtoUse
