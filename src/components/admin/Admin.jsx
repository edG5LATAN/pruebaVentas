import React from "react";
import './Admin.css'
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <div className="admin-nav">
        <Link to={"productos"}>productos</Link>
        <Link to={"empleados"}>empleados</Link>
        <Link to={"tiendas"}>tiendas</Link>
        <Link to={"busqueda"}>busqueda</Link>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
