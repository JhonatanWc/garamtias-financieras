import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GuaranteeView() {
  const [windowActive, SetWindowActive] = useState("");

  useEffect(() => {
    SetWindowActive("register_guarantee");
  }, []);

  return (
    <>
      <nav className="tabs-container">
        <Link to="/dashboard/guarantee/register_guarantee">
          <button>Registro</button>
        </Link>
        <Link to="/dashboard/guarantee/search_guarantee">
          <button>Consulta de garantia</button>
        </Link>
        <Link to="/dashboard/guarantee/files_guarantee">
          <button>Archivos de reclamacion</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
