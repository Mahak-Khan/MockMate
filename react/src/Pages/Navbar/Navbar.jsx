import React, { useState, useEffect } from 'react'
import { IoHome } from "react-icons/io5"
import { MdStart } from "react-icons/md"
import { TfiThought } from "react-icons/tfi"
import { LuContactRound } from "react-icons/lu"
import { MdFeedback } from "react-icons/md"
import { LuBrainCircuit } from "react-icons/lu"
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const toggleNavbar = () => setOpen(prev => !prev)
    window.addEventListener("open-navbar", toggleNavbar)

    return () => {
      window.removeEventListener("open-navbar", toggleNavbar)
    }
  }, [])

  const handleNav = (path) => {
    nav(path)
    setOpen(false)
  }

  // 🔹 ACTIVE CLASS HELPER
  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-slate-600"

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 h-screen w-70
        bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50 gap-10 pt-8 pl-10
        transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h1 className="text-3xl p-4 flex gap-2 font-bold">
          MockMate <LuBrainCircuit className="mt-1" />
        </h1>

        <ul className="flex flex-col gap-10 pt-10 pl-6 text-lg">
          <li
            className={`text-2xl flex gap-3 cursor-pointer ${isActive('/home')}`}
            onClick={() => handleNav('/home')}
          >
            Home <IoHome className="mt-1" />
          </li>

          <li
            className={`text-2xl flex gap-3 cursor-pointer ${isActive('/getStarted')}`}
            onClick={() => handleNav('/getStarted')}
          >
            Get Started <MdStart className="mt-1" />
          </li>

          <li
            className={`text-2xl flex gap-3 cursor-pointer ${isActive('/howToUse')}`}
            onClick={() => handleNav('/howToUse')}
          >
            How to use? <TfiThought className="mt-1" />
          </li>

          <li
            className={`text-2xl flex gap-3 cursor-pointer ${isActive('/contactUs')}`}
            onClick={() => handleNav('/contactUs')}
          >
            Contact Us <LuContactRound className="mt-1" />
          </li>

          <li
            className={`text-2xl flex gap-3 cursor-pointer ${isActive('/feedback')}`}
            onClick={() => handleNav('/feedback')}
          >
            Feedback <MdFeedback className="mt-1" />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
