import React from "react";
import { Link, Outlet } from "react-router-dom";

function Reports() {
  return (
    <>
      <nav className="tabs-container">
        <Link to="/dashboard/reports/search-list">
          <button>Informes</button>
        </Link>
        <Link to="/dashboard/reports/statistics">
          <button>Estadisticas</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Reports;
