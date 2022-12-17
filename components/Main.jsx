import React, { useState } from 'react'
import Add_details_form from './Add_details_form'

export default function Main() {

    const [modal, setmodal] = useState(false)


    return (
        <div>

            <div className='w-full h-[87vh]  bg-doctor bg-center'>
                <h1 className='text-3xl text-white font-semibold py-5 ml-6'>Are you Doctor ? Need Help for writing Prescription? Click below</h1>

                <div className='flex justify-around items-center'>

                    <input onClick={() => setmodal(!modal)} className=' text-white bg-green-400 hover:bg-green-500 rounded-lg h-12 px-3 ml-40 font-semibold cursor-pointer' type="button" value="Write a Prescription" />

                    <img className='h-4/6 w-2/6' src="./doctor" alt="" />
                </div>

            </div>

            {
                modal && <Add_details_form setmodal={setmodal} />
            }
        </div>
    )
}
