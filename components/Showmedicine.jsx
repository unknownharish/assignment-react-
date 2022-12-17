import React from 'react'

export default function Showmedicine({ data }) {
    return (

        <tr >
            <td width={100} align='center'>{data.name}</td>
            <td align='center'>{data.dosage}</td>
            <td align='center'>{data.qty}ml</td>
            <td align='center'>{data.duration}</td>
            <td align='center'>{data.consuption}</td>
        </tr>

    )
}
