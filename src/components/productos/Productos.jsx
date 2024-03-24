import React, { useState } from "react";
import "./Productos.css";

function Productos() {
  const [data, setdata] = useState([
    {
      id: "01",
      nombre: "mantequilla",
      cantidad: "1lb",
      precio: "50",
    },
    {
      id: "02",
      nombre: "queso",
      cantidad: "1lb",
      precio: "100",
    },
  ]);

  const[id,setid]=useState(0)
  const[nombre,setnombre]=useState("")
  const[cantidad,setcantidad]=useState("")
  const[precio,setprecio]=useState("")
  const[error,seterror]=useState("")

 
  const agregar=(e)=>{
    e.preventDefault();
    if ( nombre!="" && cantidad!="" && precio!="") {
      let newd = {
        id:id,
        nombre:nombre,
        cantidad:cantidad,
        precio:precio
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
    setcantidad("")
    setprecio("")
    seterror("")
  };

  return (
    <div className="productos">
      <div className="productos-form">
        <form action="">
          <label htmlFor="">id</label>
          <input onChange={(e)=>setid(e.target.value)} value={id} type="text" />

          <label htmlFor="">Nombre</label>
          <input onChange={(e)=>setnombre(e.target.value)}  value={nombre} type="text" placeholder="ingrese su nombre" />

          <label htmlFor="">Cantidad</label>
          <input onChange={(e)=>setcantidad(e.target.value)}  value={cantidad} type="text" placeholder="ingrese su cantidad" />

          <label htmlFor="">Precio</label>
          <input onChange={(e)=>setprecio(e.target.value)}  value={precio} type="text" placeholder="ingrese su precio" />
          <p className="ventas-error">{error}</p>
          <div className="productos-form-botones">
            <button onClick={agregar}>agregar</button>
            {/* <button>editar</button>
            <button>eliminar</button> */}
            <button onClick={limpiar}>limpiar</button>
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
            {
              data.map((res,index)=>{
                return<tr key={index}>
                <td>{res.id}</td>
                <td>{res.nombre}</td>
                <td>{res.cantidad}</td>
                <td>{res.precio}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productos;
