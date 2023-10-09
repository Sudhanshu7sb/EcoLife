'use client'

import Image from 'next/image'
import { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import FeaturesDropDown from './components/FeaturesDropDown';
import SearchDropDown from './components/SearchDropDown';
import CartDropDown from './components/CartDropDown';
import SideMenu from './components/SideMenu';




export default function Home() {
  let showMenu = false;

  let [dropdownVisible, setDropdownVisible] = useState(false);
  let [searchDropdown, setSearchDropDown] = useState(false);
  let [cartDropdown, setCartDropdown] = useState(false);
  let [sideMenu,setSideMenu] = useState(false);


  const handlemouseenter = () => {
    setDropdownVisible(true);
  }
  const handlemouseleave = () => {
    setDropdownVisible(false);
  }
  const handleSearchDropDown = () => {
    setSearchDropDown(!searchDropdown)
  }
  const showCartDropdown = () => {
    setCartDropdown(true);
  }
  const hideCartDropDown = () => {
    setCartDropdown(false);
  }
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  }
  return (
    <main className='w-full h-screen bg-white'>

      <header className='w-full h-21 flex relative justify-between items-center p-4 bg-white text-black shadow-md'>

        <nav className='w-[70%] xl:w-[100%] flex  items-center py-1 xl:py-3' >
          <p className=' block w-[20%] text-xl  xl:hidden' ><GiHamburgerMenu onClick={handleSideMenu}/></p>
          {sideMenu && <SideMenu handleSideMenu={handleSideMenu}/>}
          <p className='block xl:hidden w-[20%] text-xl'> <GoSearch onClick={handleSearchDropDown} /></p>
          <div className='xl:hidden'>

            {searchDropdown && <SearchDropDown />}
          </div>
          <h1 className='w-[60%] xl:w-[10%] cursor-pointer flex justify-center '><img src='https://ecolife.posthemes.com/demo1/cosmetic3/img/logo-16460347097.jpg' alt="Ecolife" /></h1>

          <ul className='xl:w-[50%] xs:w-[70%] justify-evenly items-center hidden xl:flex relative'>
            <li className='text-[#C0B07D] hover:text-[#C0B07D] underline underline-offset-8 decoration-2 text-sm font-bold' >Home</li>
            <li className='text-black font-bold hover:text-[#C0B07D] hover:underline hover:underline-offset-8 hover:decoration-2 flex items-center text-md my-anchor-element hover:transition-all ' onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>Features <BsChevronDown className='text-xs hover:cursor-default' />
              {dropdownVisible && <FeaturesDropDown />}
            </li>
            <li className='text-black font-bold hover:text-[#C0B07D] hover:underline hover:underline-offset-8 hover:decoration-2 flex items-center text-sm'>Categories<BsChevronDown className='text-xs hover:cursor-default' /></li>
            <li className='text-black font-bold hover:text-[#C0B07D] hover:underline hover:underline-offset-8 hover:decoration-2 flex items-center text-sm'>Skincare<BsChevronDown className='text-xs hover:cursor-default' /></li>
            <li className='text-black font-bold hover:text-[#C0B07D] hover:underline hover:underline-offset-8 hover:decoration-2 text-sm' flex items-center>Contact Us</li>


          </ul>
        </nav>
        <ul className='flex  relative justify-around items-center w-[30%] xl:w-[15%]'>

          <li className='hidden xl:block text-black hover:text-[#C0B07D] text-2xl font-bold'><button ><GoSearch onClick={handleSearchDropDown} /></button>
            {searchDropdown && <SearchDropDown />}
          </li>
          <li className='xl:hidden text-xl'><CgProfile /></li>
          <li className='text-black hover:text-[#C0B07D] text-2xl relative flex font-bold hover:transition-all' onMouseEnter={showCartDropdown} onMouseLeave={hideCartDropDown}><BsHandbag /><small className=' text-black bg-[#C0B07D] absolute w-[15px]   -bottom-1 -right-2 rounded-full text-xs text-center'>0</small></li> <small className='hidden xl:block'>$0.00</small>

          {cartDropdown && <CartDropDown />}

        </ul>

      </header>
    </main>
  )
}
