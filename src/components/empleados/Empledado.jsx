import React from "react";
import "./Empleados.css";

function Empledado() {
  return (
    <div className="empleado">
      <div className="empleado-form">
        <form action="">
          <label >id</label>
          <input type="text" placeholder="ingrese su nombre" />

          <label>nombre</label>
          <input type="text" placeholder="ingrese su nombre" />

          <label >operador</label>
          <input type="text" placeholder="ingrese su nombre" />

          <div className="empleado-form-botones">
            <button>agregar</button>
            <button>editar</button>
            <button>eliminar</button>
            <button>limpiar</button>
          </div>
        </form>
      </div>

      <div className="empleado-tabla">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>nombre</td>
              <td>operador</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>juan</td>
              <td>camion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Empledado;
