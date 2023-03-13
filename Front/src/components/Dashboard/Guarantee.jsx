import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export function GuaranteeView() {
  return (
    <>
      <nav className="tabs-container">
        <Link to="/dashboard/guarantee/register_guarantee">
          <button>Registro</button>
        </Link>
        <Link to="/dashboard/guarantee/consultation/records">
          <button>Consulta de garantia</button>
        </Link>
        <Link to="/dashboard/guarantee/files_guarantee">
          <button>Archivos de reclamacion</button>
        </Link>
      </nav>
      <Outlet />
    </>
  )
}
