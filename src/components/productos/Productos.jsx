import React from "react";
import "./Productos.css";

function Productos() {
  return (
    <div className="productos">
      <div className="productos-form">
        <form action="">
          <label htmlFor="">id</label>
          <input type="text" />

          <label htmlFor="">Nombre</label>
          <input type="text" placeholder="ingrese su nombre" />

          <label htmlFor="">Cantidad</label>
          <input type="text" placeholder="ingrese su cantidad" />

          <label htmlFor="">Precio</label>
          <input type="text" placeholder="ingrese su precio" />
          <div className="productos-form-botones">
            <button>agregar</button>
            <button>editar</button>
            <button>eliminar</button>
            <button>limpiar</button>
          </div>
        </form>
      </div>
      
      <div className="productos-table">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>nombre</td>
              <td>cantidad</td>
              <td>precio</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>lucas</td>
              <td>10lbs</td>
              <td>50lps</td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
  );
}

export default Productos;
