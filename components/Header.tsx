'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navIcons, navlinks } from '@/data/data'
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className='lg:block hidden'>
        <nav className='fixed w-full z-10 flex items-center justify-between px-8 py-5 bg-black text-white' style={{ borderBottom: '1px solid white' }}>
          <div className="logo">
            <p className='text-3xl blue-color font-bold capitalize'><Link href="#home">Kishan Jaiswar</Link></p>
          </div>
          <ul className="nav-links flex space-x-6 rounded-2xl">
            {navlinks?.map((obj, index) => (
              <li key={index} className="relative group">
                <Link href={obj?.path} className="relative z-10 text-white px-3 py-2 block transition duration-300">
                  {obj?.label}
                </Link>
                <span className="absolute inset-0 bg-[#7eadfc] opacity-0 group-hover:opacity-100 transition duration-300 z-0 rounded-2xl"></span>
              </li>
            ))}
          </ul>
          <ul className="nav-icons flex space-x-6 text-xl">
            {navIcons.map((obj, index) => {
              return (
                <li key={index}>
                  <Link href={obj.link} target='_blank' className="rounded-md">
                    <obj.icon />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {/* Responsive header */}
      <div className='fixed w-full bg-black z-10'>
        {!open &&
          <div className='lg:hidden flex p-[20px] border-b border-white justify-between items-center'>
            <p className='text-3xl blue-color font-bold capitalize'><Link href="#home">Kishan Jaiswar</Link></p>
            <GiHamburgerMenu className='font-5xl text-white' onClick={() => setOpen(true)} />
          </div>
        }
        {open &&
          <header className='lg:hidden block text-white p-[20px]'>
            <div className="logo flex items-center justify-between border-b border-white pb-[20px]">
              <p className='text-3xl blue-color font-bold capitalize'><Link href="#home">Kishan Jaiswar</Link></p>
              <AiOutlineClose className='text-white font-4xl' onClick={() => setOpen(false)} />
            </div>
            <div className='pb-[20px]'>
              <ul className="nav-links-responsive pt-[20px]">
                {navlinks?.map((obj, index) => (
                  <li key={index} className="" onClick={() => setOpen(false)}>
                    <Link href={obj?.path} className="relative z-10 text-white py-2 block transition duration-300">
                      {obj?.label}
                    </Link>
                    <span className="absolute inset-0 bg-[#7eadfc] opacity-0 group-hover:opacity-100 transition duration-300 z-0 rounded-2xl"></span>
                  </li>
                ))}
              </ul>
              {/* <ul className="nav-icons flex space-x-6 text-xl pt-[20px]">
                {navIcons.map((obj, index) => {
                  return (
                    <li key={index}>
                      <Link href={obj.link} target='_blank' className="rounded-md">
                        <obj.icon />
                      </Link>
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </header>
        }
      </div>
    </div>
  )
}

export default Header