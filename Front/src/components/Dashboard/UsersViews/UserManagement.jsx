import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function UserManagement() {
  const [TagMenu, SetTagMenu] = useState("");
  return (
    <>
      <nav className="user_magnament_tabs">
        <Link to="/dashboard/users/management/manage">
          <button>Gestion De usuario</button>
        </Link>
        <Link to="/dashboard/users/management/filter-search">
          <button>Busqueda por filtro</button>
        </Link>
        <Link to="/dashboard/users/management/user-list">
          <button>Listar Usuarios</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

function CreateUser() {
  return (
    <form>
      <div>
        <div>
          <label>Documento / NIT</label>
          <input type="text" placeholder="Documento / NIT"></input>
        </div>
        <div>
          <label>Nombre Completo / Razón Social</label>
          <input
            type="text"
            placeholder="Nombre Completo /  Razón Social"
          ></input>
        </div>
      </div>
      <div>
        <div>
          <label>Rol</label>
          <select>
            <option> -- Seleccione -- </option>
          </select>
        </div>
        <div>
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Correo Electrónico"></input>
        </div>
      </div>
      <div>
        <div>
          <label>¿El usuario pertenece a un cliente?</label>
          <input
            type="checkbox"
            placeholder="¿El usuario pertenece a un cliente?"
          ></input>
        </div>
        <div>
          <label>Clientes</label>
          <select>
            <option> -- Seleccione -- </option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label>¿El usuario pertenece a una casa de cobranza?</label>
          <input
            type="checkbox"
            placeholder="¿El usuario pertenece a una casa de cobranza?"
          ></input>
        </div>
        <div>
          <label>casa de cobranza</label>
          <select>
            <option> -- Seleccione -- </option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <label>Ciudad</label>
          <input type="text" placeholder="Ciudad"></input>
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" placeholder="Contraseña"></input>
        </div>
      </div>
      <div>
        <div>
          <button>Cancelar</button>
        </div>
        <div>
          <button>Guardar</button>
        </div>
      </div>
    </form>
  );
}

function SearchUser() {
  return (
    <div>
      <div>
        <form>
          <div>
            <div>
              <label>Documento / NIT</label>
              <input type="text" placeholder="Documento / NIT"></input>
            </div>
            <div>
              <label>Nombre Completo / Razón Social</label>
              <input
                type="text"
                placeholder="Nombre Completo /  Razón Social"
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label>Rol</label>
              <select>
                <option> -- Seleccione -- </option>
              </select>
            </div>
            <div>
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Correo Electrónico"></input>
            </div>
          </div>
          <div>
            <div>
              <button>Limpiar</button>
            </div>
            <div>
              <button>Buscar</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <TableUsers />
      </div>
    </div>
  );
}

function ListUser() {
  return (
    <div>
      <div>
        <div>
          <button>Buscar</button>
        </div>
        <div>
          <button>Limpiar</button>
        </div>
      </div>
      <div>
        <TableUsers />
      </div>
    </div>
  );
}

function TableUsers() {
  return (
    <table>
      <thead>
        <th>
          <strong>ID</strong>
        </th>
        <th>
          <strong>NIT</strong>
        </th>
        <th>
          <strong>Rol</strong>
        </th>
        <th>
          <strong>Nombre completo /Razón social</strong>
        </th>
        <th>
          <strong>Correo</strong>
        </th>
        <th>
          <strong>Acciones</strong>
        </th>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
