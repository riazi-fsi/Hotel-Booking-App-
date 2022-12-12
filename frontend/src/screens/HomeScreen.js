import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Room from '../components/Room';
function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState();
  const [error, setError] = useState()

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await axios.get('api/rooms/getallrooms');
      setRooms(data.data);
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
      {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error...</h1>) : (
        rooms.map((room) => {
          return <div>
            <Room room={room} />
          </div>
        })

      )}
  
    </div>

  )
}

export default HomeScreen