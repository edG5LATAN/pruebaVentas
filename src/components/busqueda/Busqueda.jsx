import React, { useState } from "react";
import "./Busqueda.css";

function Busqueda() {

  const[data,setdata]=useState([{
    id:1,
    fecha:"03/03/24",
    vendedor:"juan perez",
    productos:"mantequilla",
    cantidad:"100lbs",
    tienda:"los gemelos",
    abono:"no",
    total:1900
  },
  {
    id:2,
    fecha:"03/04/24",
    vendedor:"lucas lainez",
    productos:"queso",
    cantidad:"80lbs",
    tienda:"las torres",
    abono:"no",
    total:1800
  },
  {
    id:3,
    fecha:"06/03/24",
    vendedor:"rigoberto colindres",
    productos:"",
    cantidad:"",
    tienda:"el patio",
    abono:"si",
    total:1900
  }])
  const [select,setselect]=useState("")
  const[variable,setvariable]=useState("")

  const buscar=()=>{
    let ddtt=data.filter(res=>{
      return res.vendedor==`${variable}`
    })
    setdata(ddtt)
  }

  return (
    <div className="busqueda">
      <div className="busqueda-busqueda">
        <div className="busqueda-opciones">
          <label>Buscar por</label>
          <select onChange={(e)=>setselect(e.target.value)}  name="" id="">
            <option value="fecha">fecha</option>
            <option value="vendedor">vendedor</option>
            <option value="prodducto">producto</option>
            <option value="tienda">tienda</option>
          </select>
        </div>
        <div className="busqueda-busqueda-info">
          <label>Busqueda</label>
          <input onChange={(e)=>setvariable(e.target.value)} value={variable} type="search" name="" id="" placeholder="ingrese el nombre" />
        </div>
        <div className="busqueda-botones">
          <button onClick={buscar}>Buscar</button>
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
            {
              data.map((res,index)=>{
                return<tr key={index}>
                <td>{res.id}</td>
                <td>{res.fecha}</td>
                <td>{res.vendedor}</td>
                <td>{res.productos}</td>
                <td>{res.cantidad}</td>
                <td>{res.tienda}</td>
                <td>{res.abono}</td>
                <td>{res.total}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Busqueda;
