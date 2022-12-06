import React, { useEffect, useState } from 'react'
import axios from 'axios'
function HomeScreen() {
  const [rooms,setRooms]=useState([])

  const fetchData = async () =>{
    try {
      const data = await axios.get('api/rooms/getallrooms');
      setRooms(data.data);
    } catch (error) {
      console.error(error.message);
    }

  }
  useEffect(() => { 

    fetchData() 
  
  },[]);
  return (
    <div>HomeScreen HomeScreen
    lenght= {rooms.length}
    </div>

  )
}

export default HomeScreen