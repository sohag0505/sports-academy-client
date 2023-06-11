import React from 'react';

const ManageAddedCoursesCard = ({ course, index }) => {
    const { name,
        price,
        image,
        instructorName,
        availableSeats,
        _id,status
    } = course
     const currentStatus = ['pending', 'accepted', 'rejected']
     const handleStatusChange = (e) => {
        const currentStatus = e.target.value;
        const editedStatus = { status: currentStatus }
        fetch(`http://localhost:5000/courseStatus/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedStatus)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Status updated')
                }
            })
    }
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
               
                    <select onChange={handleStatusChange} className="select select-bordered" defaultValue={status}>
                        {currentStatus.map((CS, index) =>
                            <option disabled={CS === status} value={CS} key={index}>{CS}</option>
                        )}
                    </select>
               
            </td>
        </tr>

    );
};

export default ManageAddedCoursesCard;