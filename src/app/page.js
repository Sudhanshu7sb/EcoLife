'use client'

import Image from 'next/image'
import { BsChevronDown } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { useState } from 'react';
import FeaturesDropDown from './components/FeaturesDropDown';



export default function Home() {
  let showMenu = false;

  let [dropdownVisible,setDropdownVisible] = useState(false);

  const handlemouseenter = () => {
    setDropdownVisible(true);
  }
  const handlemouseleave = () => {
    setDropdownVisible(false);
  }
 
  return (
    <header className='w-full h-21 flex relative justify-between items-center p-4 bg-white text-black'>

      <nav className='w-[100%] flex  items-center py-3' >
        <h1 className={showMenu ? 'w-0' : 'w-[10%] cursor-pointer'}><img src='https://ecolife.posthemes.com/demo1/cosmetic3/img/logo-16460347097.jpg' alt="Ecolife" /></h1>


        <ul className='w-[50%] justify-evenly items-center  lg:flex'>
          <li className='text-[#C0B07D] hover:text-[#C0B07D] underline text-md'>Home</li>
          <li className='text-black text-bold hover:text-[#C0B07D] hover:underline flex items-center text-md my-anchor-element' onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>Features <BsChevronDown className='text-xs hover:cursor-default' /> 
          {dropdownVisible && <FeaturesDropDown/>}
          </li>
          <li className='text-black text-bold hover:text-[#C0B07D] hover:underline flex items-center text-sm'>Categories<BsChevronDown className='text-xs hover:cursor-default' /></li>
          <li className='text-black text-bold hover:text-[#C0B07D] hover:underline flex items-center text-sm'>Skincare<BsChevronDown className='text-xs hover:cursor-default' /></li>
          <li className='text-black text-bold hover:text-[#C0B07D] hover:underline text-sm' flex items-center>Contact Us</li>


        </ul>
      </nav>
      <ul className='flex  justify-around items-center  w-[15%]'>

        <li className='text-black hover:text-[#C0B07D] text-2xl'><button ><GoSearch /></button></li>
        <li className='text-black hover:text-[#C0B07D] text-2xl relative flex'><BsHandbag /><small className=' text-black bg-[#C0B07D] absolute w-[15px]   -bottom-1 -right-2 rounded-full text-xs text-center'>0</small></li>$0.00



      </ul>

    </header>
  )
}
