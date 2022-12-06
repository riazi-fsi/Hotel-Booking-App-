import React from 'react'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App