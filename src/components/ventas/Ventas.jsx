import React, { useEffect, useState } from "react";
import "./Ventas.css";

function Ventas() {
  const [data, setdata] = useState([
    {
      id: "01",
      fecha: "02/3/24",
      vendedor: "juan perez",
      producto: "mantequilla",
      cantidad: "200",
      tienda: "los gemelos",
      abono:true,
      precio: "1500",
    },
    {
      id: "02",
      fecha: "05/3/24",
      vendedor: "mirian lucas",
      producto: "queso",
      cantidad: "300",
      tienda: "los abarrotes",
      abono:true,
      precio: "2000",
    },
    {
      id: "03",
      fecha: "06/3/24",
      vendedor: "marcos tapia",
      producto: "cuajada",
      cantidad: "499",
      tienda: "don luis",
      abono:false,
      precio: "800",
    }
  ]);
  const [id,setid]=useState(0)
  const [fecha,setfecha]=useState("")
  const [vendedor,setvendedor]=useState("")
  const [producto,setproducto]=useState("")
  const [cantidad,setcantidad]=useState("")
  const [tienda,settienda]=useState("")
  const [precio,setprecio]=useState("")
  const [abono,setabono]=useState("")
  const [error,seterror]=useState("")

  const agregar = (e) => {
    e.preventDefault();
    if ( fecha!="" && vendedor!="" &&tienda!=""&&precio!="") {
      let newd = {
        id:id,
        fecha:fecha,
        vendedor:vendedor,
        producto:producto,
        cantidad:cantidad,
        tienda:tienda,
        abono:abono,
        precio:precio
      };
      setdata([...data, newd]);
      lipiarInput(e);
    } else {
      seterror("Rellena todas las cacillas")
    }
    
  };

  const mostrarDatos=(e)=>{
    
    setid(e.target.parentNode.childNodes[0].textContent)
    setfecha(e.target.parentNode.childNodes[1].textContent)
    setvendedor(e.target.parentNode.childNodes[2].textContent)
    setproducto(e.target.parentNode.childNodes[3].textContent)
    setcantidad(e.target.parentNode.childNodes[4].textContent)
    settienda(e.target.parentNode.childNodes[5].textContent)    
    setabono(e.target.parentNode.childNodes[6].textContent=="si"?true:false)
    setprecio(e.target.parentNode.childNodes[7].textContent)

  }

  const limpiar = (e) => {
    e.preventDefault();
    lipiarInput(e);
  };
  const lipiarInput = () => {
    setid("")
    setfecha("")
    setvendedor("")
    setproducto("")
    setcantidad("")
    settienda("")
    setprecio("")
    setabono(false)
    seterror("")
  };

  


  return (
    <div className="ventas">
      <div className="ventas-forms">
        <form>
          <label>id</label>
          <input onClick={(e)=>setabono(e.target.checked)} onChange={(e)=>setid(e.target.value)} type="text" value={id}/>

          <label>Abono</label>
          <input onChange={(e)=>setabono(e.target.checked)} checked={abono}  className="abono-input" type="checkbox" />

          <label>fecha</label>
          <input onChange={(e)=>setfecha(e.target.value)} type="date" value={fecha} />

          <label>vendedor</label>
          <input onChange={(e)=>setvendedor(e.target.value)} type="text" placeholder="ingrese vendedor" value={vendedor} />

          <label>producto</label>
          <input onChange={(e)=>setproducto(e.target.value)} type="text" placeholder="ingrese producto" value={producto} />

          <label>cantidad</label>
          <input onChange={(e)=>setcantidad(e.target.value)} type="text" placeholder="ingrese cantidad" value={cantidad} />

          <label>tienda</label>
          <input onChange={(e)=>settienda(e.target.value)} type="text" placeholder="ingrese tienda" value={tienda} />

          <label>precio</label>
          <input onChange={(e)=>setprecio(e.target.value)} type="number" placeholder="ingrese el precio" value={precio} />
          <p className="ventas-error">{error}</p>

          <div className="ventas-botones">
            <button onClick={agregar}>agregar</button>
            <button onClick={(e)=>e.preventDefault()} >editar</button>
            <button onClick={(e)=>e.preventDefault()}>eliminar</button>
            <button onClick={limpiar}>limpiar</button>
          </div>
        </form>
      </div>

      <div className="ventas-tabla">
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
                <tr key={index} onClick={mostrarDatos}>
                  <td>{res.id}</td>
                  <td>{res.fecha}</td>
                  <td>{res.vendedor}</td>
                  <td>{res.producto}</td>
                  <td>{res.cantidad}</td>
                  <td>{res.tienda}</td>
                  <td>{res.abono?"si":"no"}</td>
                  <td>{res.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ventas;
