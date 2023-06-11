import React from 'react';

const ManageCoursesCard = ({ course, index , handleDelete,showUpdater}) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats,
        _id, status
    } = course
   
   
    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={image} />
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{price}</td>
            <td>
                {instructorName}
            </td>
            <td>
                {availableSeats}
            </td>
            <td>
                <p className={`badge text-white ${status === 'accepted' ? 'badge-success' : 'badge-error'}`}>{status}</p>
            </td>
            <td className='flex flex-col gap-3 w-full h-full justify-center items-center'><button className='badge badge-error text-white' onClick={()=>handleDelete(_id)}>Delete</button> 
            <button onClick={()=>showUpdater(course)} className='badge badge-info text-white'>Edit</button></td>
        </tr>
    );
};

export default ManageCoursesCard;