import React from 'react'
import { FiArrowLeft } from "react-icons/fi";

const SideMenu = ({ handleSideMenu }) => {
  return (
    <div className='w-[30%] h-screen  absolute top-28 -my-12 flex '>
      <div className='w-full h-screen bg-white'>
        <div className='flex w-[full]  py-1 justify-between bg-[#253237] text-white'>

          <p >Close</p>
          <FiArrowLeft onClick={handleSideMenu} />
        </div>
      </div>
    </div>
  )
}

export default SideMenu