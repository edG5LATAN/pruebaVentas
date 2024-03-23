import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


function Header() {

   const navigate= useNavigate()  

  return (
    <div className='header'>
      <img src="./img/logo.jpg" alt="info hoja" />
      <h1>Creacion de app de ventas</h1>
      <nav>
        <ul>
          <li onClick={()=>navigate("/")}>admin</li>
          <li onClick={()=>navigate("/productos")}>productos</li>
          <li onClick={()=>navigate("/empleados")}>empleados</li>
          <li onClick={()=>navigate("/tiendas")}>tiendas</li>
          <li onClick={()=>navigate("/ventas")}>ventas</li>
          {/* <li onClick={()=>navigate("/prueba")}>prueba</li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header