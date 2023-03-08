import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function UserView() {
  return (
    <>
      <nav className="tabs-container">
        <Link to="/dashboard/users/profile">
          <button>Editar mi perfil</button>
        </Link>
        <Link to="/dashboard/users/management/manage">
          <button>Gestion de usuarios</button>
        </Link>
        <Link to="/dashboard/users/roles">
          <button>Roles</button>
        </Link>
      </nav>
      <div id="container__content">
        <div id="container__content-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
