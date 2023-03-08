import React from "react";
import { Link, Outlet } from "react-router-dom";

function Processes() {
  return (
    <>
      <nav className="tabs-container">
        <Link to="/dashboard/processes/system">
          <button>Sistema</button>
        </Link>
        <Link to="/dashboard/processes/collection-management">
          <button>Gestionar cobranza</button>
        </Link>
        <Link to="/dashboard/processes/warranty-adjustment">
          <button>Ajuste de grantia</button>
        </Link>
        <Link to="/dashboard/processes/product-creation">
          <button>Creacion de producto</button>
        </Link>
        <Link to="/dashboard/processes/manage-interests">
          <button>Gestionar intereses</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Processes;
