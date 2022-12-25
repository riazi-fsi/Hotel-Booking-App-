import React, { useEffect, useState } from 'react'
import axios from 'axios'
function BookingScreen({ props }) {
    const [loading, setLoading] = useState();
    const [error, setError] = useState()
    const [room, setRoom] = useState()
    const siteUrl = window.location.pathname;
    var id = siteUrl.split("/").pop();
    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await axios.post('api/rooms/getroombyid',{roomid:id});
            setRoom(data.data);
            setLoading(false)
        } catch (error) {
            setError(true)
            console.error(error.message);
            setLoading(false)
        }

    }
    useEffect(() => {

        fetchData()

    }, []);



    return (

        <div>


            {loading ? (<h1>loading...</h1>) :
                error ? (<h>error...</h>) :
                    (
                        <div>
                            <h2>booking Detail</h2>
                        </div>
                    )}


        </div>
    )
}

export default BookingScreen