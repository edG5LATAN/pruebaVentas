import React from "react";
import "./Busqueda.css";

function Busqueda() {
  return (
    <div className="busqueda">
      <div className="busqueda-busqueda">
        <div className="busqueda-opciones">
          <label>Buscar por</label>
          <select name="" id="">
            <option value="">fecha</option>
            <option value="">vendedor</option>
            <option value="">producto</option>
            <option value="">tienda</option>
          </select>
        </div>
        <div className="busqueda-busqueda-info">
          <label>Busqueda</label>
          <input type="search" name="" id="" placeholder="ingrese el nombre" />
        </div>
        <div className="busqueda-botones">
          <button>Buscar</button>
        </div>
      </div>

      <div className="busqueda-tabla">
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>fecha</td>
              <td>vendedor</td>
              <td>producto</td>
              <td>cantidad</td>
              <td>tienda</td>
              <td>abono</td>
              <td>total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>03/03/24</td>
              <td>hector</td>
              <td>mantequilla</td>
              <td>30lbs</td>
              <td>la tortillas</td>
              <td>si</td>
              <td>190</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Busqueda;
