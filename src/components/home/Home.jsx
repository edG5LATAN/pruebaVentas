import React from 'react'
import './Home.css'
import { Link, Route, Routes } from 'react-router-dom'
import Prueba1 from '../prueba/Prueba1'

function Home() {
  return (
    <div className='home'>
      <div className='home-nav'>
        <ul>
        <Link to={"prueba"}>prueba</Link>
        <li>tienda</li>
        <li>datos</li>
        <li>ind</li>
        </ul>
      </div>
      <Routes>
        <Route path='prueba' element={<Prueba1 />}/>

      </Routes>
    </div>
  )
}

export default Home