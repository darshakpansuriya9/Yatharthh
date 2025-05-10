import React from 'react'
import Logo from "../icons/Logo"
import { navigationLinks } from "../../utils/content"
import { useModalContext } from '../../contexts/ModalContext'


const Navigation = () => {
  const {setActiveModal} = useModalContext();
  return (
    <nav className='text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light'>
      <a className='flex items-center gap-x-3' href="#">
        <Logo
          className="stroke-primary-500 h-6"
          alt="NoteFlow Logo Icon"
          width={5}
        />
        <p className="text-xl font-bold tracking-tight">Yatharth</p>
      </a>
      <ul className="flex items-center gap-x-8">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}
              className="hover:text-primary-500 transition-properties"
            >{link.link}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-3">
        {/* <button 
        className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal">
          Login
        </button> */}
        <button
          className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal"
          onClick={() => setActiveModal("sign-up")}
        >
          Get Started
        </button>
      </div>


    </nav>
  )
}

export default Navigation