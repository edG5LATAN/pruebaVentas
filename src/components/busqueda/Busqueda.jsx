import React, { useState } from "react";
import "./Busqueda.css";

function Busqueda() {
  let datainfo=[
    {
      id: 1,
      fecha: "03/03/24",
      vendedor: "juan perez",
      productos: "mantequilla",
      cantidad: "100lbs",
      tienda: "los gemelos",
      abono: "no",
      total: 1900,
    },
    {
      id: 2,
      fecha: "03/04/24",
      vendedor: "lucas lainez",
      productos: "queso",
      cantidad: "80lbs",
      tienda: "el patio",
      abono: "no",
      total: 1800,
    },
    {
      id: 3,
      fecha: "06/03/24",
      vendedor: "rigoberto colindres",
      productos: "mantequilla",
      cantidad: "80lbs",
      tienda: "las torres",
      abono: "si",
      total: 1900,
    },
    {
      id: 4,
      fecha: "03/04/24",
      vendedor: "lucas lainez",
      productos: "jamon",
      cantidad: "30lbs",
      tienda: "el patio",
      abono: "si",
      total: 1800,
    },
    {
      id: 5,
      fecha: "03/04/24",
      vendedor: "lucas lainez",
      productos: "mortadela",
      cantidad: "987lbs",
      tienda: "el patio",
      abono: "si",
      total: 1800,
    },
  ]
  const [data, setdata] = useState(datainfo);
  const [select, setselect] = useState("");
  const [variable, setvariable] = useState("");

  const buscar = () => {
    let inf=select
    let var1=variable
    if (inf != "" && var1 != "") {
      let ddtt = data.filter((res) => {
        return res[inf] == var1;
      });
      setdata(ddtt)
    } else {      
      setdata(datainfo)
    }
  
  };

  const regresar = () => {
    setdata(datainfo);
  };

  return (
    <div className="busqueda">
      <div className="busqueda-busqueda">
        <div className="busqueda-opciones">
          <label>Buscar por</label>
          <select onChange={(e) => setselect(e.target.value)} name="" id="">
            <option value="fecha">fecha</option>
            <option value="vendedor">vendedor</option>
            <option value="productos">producto</option>
            <option value="tienda">tienda</option>
          </select>
        </div>
        <div className="busqueda-busqueda-info">
          <label>Busqueda</label>
          <input
            onChange={(e) => setvariable(e.target.value)}
            value={variable}
            type="search"
            name=""
            id=""
            placeholder="ingrese el nombre"
          />
        </div>
        <div className="busqueda-botones">
          <button onClick={buscar}>Buscar</button>
          <button onClick={regresar}>regresar</button>
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
            {data.map((res, index) => {
              return (
                <tr key={index}>
                  <td>{res.id}</td>
                  <td>{res.fecha}</td>
                  <td>{res.vendedor}</td>
                  <td>{res.productos}</td>
                  <td>{res.cantidad}</td>
                  <td>{res.tienda}</td>
                  <td>{res.abono}</td>
                  <td>{res.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Busqueda;
