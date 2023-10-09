import React from 'react'

const FeaturesDropDown = () => {
  return (
    <div className="absolute top-20 -my-12 w-[700px] h-[300px] bg-white text-black shadow-md focus:ring-4 ring-slate-950 flex justify-between p-4 ">
      <div>
        <h3>Catalog Products</h3>
        <ul className='font-thin text-sm'>
          <li>Product Type 1</li>
          <li>Product Type 2</li>
          <li>Product Type 3</li>
          <li>Product Type 4</li>
        </ul>
      </div>
      <div>
        <h3>Product Gallery</h3>
        <ul className='font-thin text-sm'>
          <li>Horizontal Slider</li>
          <li>Vertical Slider</li>
          <li>Grid (1 column)</li>
          <li>Grid (2 column)</li>
          <li>Showcase Style</li>
          <li>Full Width</li>
        </ul>
      </div>
      <div>
        <h3>Filters</h3>
        <ul className='font-thin text-sm'>
          <li>Filters Sidebar</li>
          <li>FIlters Top</li>
        </ul>
        <h3>Product Details</h3>
        <ul className='font-thin text-sm'>
          <li>Horizontal</li>
          <li>Vertical</li>
          <li>Accordian</li>

        </ul>
      </div>
    </div>
  )
}

export default FeaturesDropDown
