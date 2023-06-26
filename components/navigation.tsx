import React from 'react';
import Link from 'next/link';
import { roboto } from './styles/fonts';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"

export default function navigation() {

  const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const [menu, setMenu] = useState(false);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className={roboto.className}>
      <div className='lg:hidden'>
          <button className='p-2 white rounded-md outline-none' onClick={() => setMenu(!menu)}>
              {menu ? (
                  <FaTimes className='close w-[30px] h-[30px] bg-inherit stroke-white'/>
              ) : (
                  <FaBars className='w-[30px] h-[30px] focus:border-none active:border-none'/>
              )}
          </button>
      </div>
      <div className={`${menu ? 'block' : 'max-lg:hidden'}`}>
          <ul className='flex gap-10 font-bold'>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/">Home</Link>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/about">About</Link>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/shop">Shop</Link>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/services">Services</Link>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/news">News</Link>
            <Link className="transition duration-150 border-b-2 border-transparent hover:border-[color:var(--primary-green-color)] active:border-[color:var(--primary-green-color)] focus:border-[color:var(--primary-green-color)]" href="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
