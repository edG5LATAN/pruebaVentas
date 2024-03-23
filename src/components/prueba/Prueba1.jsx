import React, { useState } from "react";
import "./Prueba.css";

function Prueba1() {
  const [valor, setvalor] = useState("");

  return (
    <div className="prueba">
      <input
        type="text"
        onChange={(e) => setvalor(e.target.value)}
        name=""
        id=""
        placeholder="prueba"
        value={valor}
      />

      <div className="prueba-botones">
        <button>agregar</button>
        <button>informacion</button>
        <button onClick={()=>setvalor("")}>limpiar</button>
      </div>
    </div>
  );
}

export default Prueba1;
