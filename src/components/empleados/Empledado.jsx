import React, { useState } from "react";
import "./Empleados.css";

function Empledado() {

  const [data, setdata] = useState([
    {
      id: "01",
      nombre: "lucas martin",
      operador: "camion"
    },
    {
      id: "02",
      nombre: "juan perez",
      operador: "moto"
    },
  ]);

  const[id,setid]=useState(0)
  const[nombre,setnombre]=useState("")
  const[operador,setoperador]=useState("")
  const[error,seterror]=useState("")

 
  const agregar=(e)=>{
    e.preventDefault();
    if ( nombre!="" && cantidad!="" && precio!="") {
      let newd = {
        id:id,
        nombre:nombre,
        operador:operador
      };
      setdata([...data, newd]);
      lipiarInput(e);
    } else {
      seterror("Rellena todas las cacillas")
    }
  }

  const limpiar = (e) => {
    e.preventDefault();
    lipiarInput(e);
  };
  const lipiarInput = (e) => {
    setid("")
    setnombre("")
    setoperador("")
    seterror("")
  };


  return (
    <div className="empleado">
      <div className="empleado-form">
        <form action="">
          <label >id</label>
          <input onChange={(e)=>setid(e.target.value)} value={id} type="text" placeholder="ingrese su id" />

          <label>nombre</label>
          <input onChange={(e)=>setnombre(e.target.value)} value={nombre} type="text" placeholder="ingrese su nombre" />

          <label >operador</label>
          <input onChange={(e)=>setoperador(e.target.value)} value={operador} type="text" placeholder="ingrese su nombre" />
          <p className="ventas-error">{error}</p>


          <div className="empleado-form-botones">
            <button onClick={agregar}>agregar</button>
            {/* <button onClick={(e)=>e.preventDefault}>editar</button>
            <button onClick={(e)=>e.preventDefault}>eliminar</button> */}
            <button onClick={limpiar} >limpiar</button>
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
            {data.map((res,index)=>{
              return<tr key={index}>
              <td>{res.id}</td>
              <td>{res.nombre}</td>
              <td>{res.operador}</td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Empledado;
