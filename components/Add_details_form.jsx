import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'


import Showmedicine from './Showmedicine'

export default function Add_details_form({ setmodal }) {


    const printref = useRef()

    const [showprint, setshowprint] = useState(false)
    const [disabled, setdisabled] = useState(true)
    const [patientName, setpatientName] = useState('')
    const [patientAge, setpatientAge] = useState()
    const [patientSex, setpatientSex] = useState('Sex')
    const [patientComplaints, setpatientComplaints] = useState('')
    const [patientDiagnosis, setpatientDiagnosis] = useState('');

    const [medicine, setmedicine] = useState([])

    const medicineName = useRef()
    const dosage = useRef()
    const qty = useRef()
    const duration = useRef()
    const consuption = useRef()


    const handlePrint = useReactToPrint({
        content: () => printref.current
    })





    async function saveData() {

        let final = {
            name: patientName,
            age: patientAge,
            sex: patientSex,
            complaints: patientComplaints,
            diagnose: patientDiagnosis,
            medicine: medicine
        };


        let { data } = await axios.post('http://localhost:3000/api/send', { ...final })


        console.log(data)

        setshowprint(true)


    }


    function printData() {

        handlePrint()
    }





    function addMedicine() {
        // console.log(medicineName.current.value, dosage.current.value, qty.current.value, duration.current.value, consuption.current.value)

        if (consuption.current.value != '') {


            let obj = {
                name: medicineName.current.value,
                dosage: dosage.current.value,
                qty: qty.current.value,
                duration: duration.current.value,
                consuption: consuption.current.value
            }

            medicineName.current.value = '';
            dosage.current.value = '';
            qty.current.value = '';
            duration.current.value = '';
            consuption.current.value = ''


            setmedicine([...medicine, { ...obj }])
            // console.log(medicine);
            setdisabled(false)

        }

    }










    return (
        <div ref={printref} className='absolute min-h-screen bg-gray-300  w-full top-0 flex justify-center items-center' >
            <div className='min-h-[90vh] w-3/6 rounded-xl bg-white ml-20'>


                {/* header */}
                <div className='flex justify-around w-full my-3'>

                    {showprint ? <button onClick={() => printData()} className='  bg-yellow-400 hover:bg-yellow-500 cursor-pointer w-20 h-6 text-center rounded-md'>PRINT</button>
                        : <button disabled={disabled} onClick={() => saveData()} className='bg-green-400 hover:bg-green-500 cursor-pointer w-20 h-6 text-center rounded-md disabled:bg-gray-300'>SAVE</button>
                    }

                    <h1 className='text-2xl text-center my-5'>Generate a Report</h1>

                    <p className='bg-red-500 hover:bg-red-600 cursor-pointer w-20 h-6   text-center rounded-md ' onClick={() => setmodal(false)}>Close</p>
                </div>


                {/* content  */}
                <div className='flex justify-center items-center flex-wrap'>


                    <div className='flex items-center flex-wrap w-5/6 ml-8'>



                        <input className=' outline-none border-b-2  rounded p-1 m-2' type="text" name="name" placeholder='Patient Name' value={patientName} onChange={(e) => setpatientName(e.target.value)} />
                        <input className='outline-none border-b-2  rounded p-1 m-2' type="text" name="name" placeholder='Age' value={patientAge} onChange={(e) => setpatientAge(e.target.value)} />


                        <select className='cursor-pointer outline-none border-b-2  rounded p-2 m-2 w-64' value={patientSex} onChange={(e) => setpatientSex(e.target.value)}>
                            <option value={'sex'}>Sex</option>
                            <option value={'m'}>M</option>
                            <option value={'f'}>F</option>
                        </select>


                    </div>

                    <div className='flex justify-center flex-col items-center'>
                        <h1 className='text-2xl text-center my-5'>Patient History</h1>

                        <div className='flex items-center flex-wrap w-5/6 '>
                            <textarea className='outline-none border rounded-xl p-3 my-3 mx-5 w-full' cols="50" rows="3" placeholder='Patinet Complaints' value={patientComplaints} onChange={(e) => setpatientComplaints(e.target.value)}></textarea>
                            <textarea className='outline-none border rounded-xl p-3 my-3 mx-5 w-full' cols="50" rows="3" placeholder='Allergies & Diagnosis' value={patientDiagnosis} onChange={(e) => setpatientDiagnosis(e.target.value)}></textarea>
                        </div>

                    </div>

                    <div>

                        <h1 className='text-2xl text-center my-5 '>Prescription</h1>

                        <div className='flex my-6 mx-2'>
                            <input ref={medicineName} className='outline-none w-1/6 px-2 mx-2 border-2 rounded-md  focus:border-gray-600' type="text" placeholder='medicine' />
                            <input ref={dosage} className='outline-none w-1/6 px-2 mx-2 border-2 rounded-md  focus:border-gray-600' type="text" placeholder='dosage' />
                            <input ref={qty} className='outline-none w-1/6 px-2 mx-2 border-2 rounded-md  focus:border-gray-600' type="text" placeholder='qty in ml' />
                            <input ref={duration} className='outline-none w-1/6 px-2 mx-2 border-2 rounded-md  focus:border-gray-600' type="text" placeholder='duration' />
                            <input ref={consuption} className='outline-none w-1/6 px-2 mx-2 border-2 rounded-md  focus:border-gray-600' type="text" placeholder='Consuption time' />
                            <img className='cursor-pointer' src="./plus.svg" alt="" title='Add one more' onClick={() => addMedicine()} />
                        </div>

                    </div>








                </div>


                <div className=' my-2'>
                    {medicine.length ?
                        <table class="table " width={'50%'} style={{ margin: 'auto' }} cellPadding={5}>
                            <thead >
                                <tr className='bg-red-300 ' >
                                    <th scope="col">Name</th>
                                    <th scope="col">Dosage</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Consuption</th>
                                </tr>
                            </thead>
                            <tbody >

                                {medicine.map((x, idx) =>
                                (
                                    <Showmedicine key={idx} data={x} />
                                )
                                )}

                            </tbody>
                        </table> : ''}

                </div>



            </div>
        </div >
    )
}
