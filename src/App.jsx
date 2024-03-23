import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Productos from "./components/productos/Productos";
import Empleados from "./components/empleados/Empledado";
import Tiendas from "./components/tiendas/Tiendas";
import Ventas from "./components/ventas/Ventas";
import Prueba1 from "./components/prueba/Prueba1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/prueba" element={<Prueba1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
