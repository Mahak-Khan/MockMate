import React from 'react'
import { MdMenu } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaHistory } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
    return (
        <header className='
        bg-white/40 backdrop-blur-xl backdrop-saturate-150
        border border-white/40 shadow-2xl z-50
        h-16 flex flex-row gap-2 rounded-full mt-5 mr-5 ml-5
        '>
            <h1 className='text-black text-4xl pl-6 pt-2.5 font-bold flex gap-2'>
                MockMate <LuBrainCircuit className='mt-1'/>
            </h1>

            <div className='flex flex-row gap-5 ml-auto mr-6'>
                {/* MENU BUTTON (toggle navbar) */}
                <button
                    title='Navbar'
                    className='cursor-pointer hover:scale-105 transition-transform'
                    onClick={() => window.dispatchEvent(new Event("open-navbar"))}
                >
                    <MdMenu size={45} />
                </button>

                <button className='cursor-pointer hover:scale-105 transition-transform'>
                    <FaHistory size={40} onClick={() => nav('/progress')} />
                </button>

                <button className='cursor-pointer hover:scale-105 transition-transform' onClick={() => nav('/profile')}>
                    <VscAccount size={45} />
                </button>
            </div>
        </header>
    )
}

export default Header
