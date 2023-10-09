import React from 'react'

const CartDropDown = () => {
    return (
        <div className='absolute top-24 -my-12 right-[0%] w-[300px] h-[200px] bg-white text-black shadow-md focus:ring-4 ring-slate-950 p-4'>
            <div className='pb-3 border-b-[1px] border-gray-200'>
                <div className='flex justify-between '>
                    <h5>0 items </h5>
                    <h4>$0.00</h4>
                </div>
                <div className='flex justify-between'>

                    <h5>Total (Tax Excl.)</h5>
                    <h4>$0.00</h4>
                </div>
            </div>
            <div className='pt-3'>
                <div className='flex justify-between'>
                    <h5>0 items </h5>
                    <h4>$0.00</h4>
                </div>
                <div className='flex justify-between'>
                    <h5>Total (Tax Ixcl.)</h5>
                    <h4>$0.00</h4>
                </div>
            </div>
            <button className='w-full mt-3 bg-slate-950 text-white p-2'>Checkout</button>
        </div>
    )
}

export default CartDropDown