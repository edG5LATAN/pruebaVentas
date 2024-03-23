import React from 'react'
import './Tiendas.css'


function Tiendas() {
  return (
    <div className='tienda'>
      <div className='tienda-form'>
        <form action="">
          <label htmlFor="">id</label>
          <input type="text" readOnly />

          <label htmlFor="">nombre</label>
          <input type="text" placeholder='ingrese un nombre' />

          <label htmlFor="">direccion</label>
          <input type="text" placeholder='ingrese la direccion' />

          <div className='tiendas-form-botones'>
          <button>agregar</button>
          <button>editar</button>
          <button>eliminar</button>
          <button>limpiar</button>
          </div>
        </form>
      </div>
      <div className='tiendas-table'>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>nombre</td>
              <td>direccion</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>tienda la cariata</td>
              <td>en el espinal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tiendas