import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


function Header() {

   const navigate= useNavigate()  

  return (
    <div className='header'>
      <img src="../img/logo.png
      " alt="info hoja" />
      <h1>Creacion de app de ventas</h1>
      <nav>
        <ul>
          <li onClick={()=>navigate("/")}>home</li>
          <li onClick={()=>navigate("/admin")}>admin</li>
          <li onClick={()=>navigate("/ventas")}>ventas</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header