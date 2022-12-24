import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
function BookingScreen({props}) {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState()
const siteUrl = window.location.pathname;
var id = siteUrl.split("/").pop();




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