import React from 'react'

function Room({ room }) {

    return (
        <div className='container'>
        <div className='row bg-orange-300 w-3/4 p-2 m-3 border-2 center justify-center '>
            <h1 className='capitalize text-center'>{room.name}</h1>
            <p>Tel: {room.phonenumber}</p>
            <button className='bg-black text-white p-1 m-1 border-r-2 text-xs '>Book Now</button>
            <button className='bg-black text-white p-1 m-1 border-r-2 text-xs'>View Details</button>

        </div>
        </div>
    )
}

export default Room