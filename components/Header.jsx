import React from 'react'

export default function Header() {
    return (
        <div className='bg-black text-white h-24 flex justify-around items-center'>

            <div className='flex items-center'>
                <img src="./stethoscope.png" alt="" className='h-14 w-18 mx-2 rounded-full' />
                <p className='text-3xl text-blue-300 hover:text-white cursor-pointer'>MedX </p>
            </div>

            <p> </p>


            <div className='flex w-20 justify-around'>
                <p className='cursor-pointer hover:text-blue-300 mx-3'> Home </p>
                <p className='cursor-pointer hover:text-blue-300'> About </p>
            </div>


            {/* <input className='bg-green-300 hover:bg-green-400 rounded px-3 py-1 font-bold' type="button" value="Print" /> */}
        </div>
    )
}
