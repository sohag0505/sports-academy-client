import React from 'react';
import { Link } from 'react-router-dom';

const SelectedCoursesCard = ({ singleClass,handleDelete }) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats,
        _id
    } = singleClass

    
    return (
        <div className="card card-compact h-[650px]bg-base-100 shadow-xl my-2 py-4">
            <figure><img className='object-cover' src={image} alt="fight" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor : {instructorName}</p>
                <div className='flex justify-between '>
                    <span className='text-xl text-rose-500'><span className='text-black'>Price :</span> {price}</span>
                    <span className='text-xl text-[#EA180B]'>{availableSeats} <span className='text-black'>Seats Available</span></span>

                </div>
                <p className='flex justify-between mt-2'><Link to={`/dashboard/payment/${_id}`} className='badge badge-warning p-2  text-white'>Pay</Link><button className='badge badge-error  text-white p-2'
                    onClick={() => handleDelete(_id)}
                >Delete</button></p>
            </div>
        </div>
    );
};

export default SelectedCoursesCard;