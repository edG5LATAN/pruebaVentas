import React, { useState } from 'react'
import './Tiendas.css'


function Tiendas() {

  const [data, setdata] = useState([
    {
      id: "01",
      nombre: "los gemelos",
      direccion: "gualaco"
    },
    {
      id: "02",
      nombre: "tia tino",
      direccion: "la venta"
    },
  ]);

  const[id,setid]=useState(0)
  const[nombre,setnombre]=useState("")
  const[direccion,setdireccion]=useState("")
  const[error,seterror]=useState("")

 
  const agregar=(e)=>{
    e.preventDefault();
    if ( nombre!="" && direccion!="") {
      let newd = {
        id:id,
        nombre:nombre,
        direccion:direccion
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
    setdireccion("")
    seterror("")
  };



  return (
    <div className='tienda'>
      <div className='tienda-form'>
        <form action="">
          <label htmlFor="">id</label>
          <input onChange={(e)=>setid(e.target.value)} value={id} type="text" />

          <label htmlFor="">nombre</label>
          <input onChange={(e)=>setnombre(e.target.value)} value={nombre} type="text" placeholder='ingrese un nombre' />

          <label htmlFor="">direccion</label>
          <input onChange={(e)=>setdireccion(e.target.value)} value={direccion} type="text" placeholder='ingrese la direccion' />
          <p className="ventas-error">{error}</p>

          <div className='tiendas-form-botones'>
          <button onClick={agregar}>agregar</button>
          {/* <button>editar</button>
          <button>eliminar</button> */}
          <button onClick={limpiar}>limpiar</button>
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
            {
              data.map((res,index)=>{
                return<tr key={index}>
                <td>{res.id}</td>
                <td>{res.nombre}</td>
                <td>{res.direccion}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tiendas