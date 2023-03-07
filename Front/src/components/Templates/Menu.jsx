import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <ul className="lists__items">
      <li className="active">
        <Link to="/home">
          <div className="container__icon">
            <span className="wcicon outlined">home</span>
          </div>
          Home
        </Link>
      </li>
      <li>
        <Link to="/users">
          <div className="container__icon">
            <span className="wcicon outlined">person</span>
          </div>
          Usuarios
        </Link>
      </li>
      <li>
        <Link to="/guarantee">
          <div className="container__icon">
            <span className="wcicon outlined">settings</span>
          </div>
          Garantías
        </Link>
      </li>
      <li>
        <Link to="/reports">
          <div className="container__icon">
            <span className="wcicon outlined">assessment</span>
          </div>
          Informes
        </Link>
      </li>
      <li>
        <Link to="/processes">
          <div className="container__icon">
            <span className="wcicon outlined">settings</span>
          </div>
          Procesos
        </Link>
      </li>
      <li>
        <Link to="/wallet">
          <div className="container__icon">
            <span className="wcicon outlined">monetization_on</span>
          </div>
          Cartera
        </Link>
      </li>
    </ul>
  );
}

export function UserNavBar({ SetWindowActive }) {
  return (
    <>
      <ul className="lists__items">
        <li onClick={() => SetWindowActive("profile")}>Editar mi perfil</li>
        <li onClick={() => SetWindowActive("users")}>Gestion de Usuarios</li>
        <li onClick={() => SetWindowActive("roles")}>Roles</li>
        <li onClick={() => SetWindowActive("ban")}>Bloqueos</li>
      </ul>
    </>
  );
}

export function UserManagementMenu({ SetTagMenu }) {
  return (
    <>
      <ul className="lists__items">
        <li onClick={() => SetTagMenu("create_user")}>Gestion De usuario</li>
        <li onClick={() => SetTagMenu("search_user")}>Busqueda por filtro</li>
        <li onClick={() => SetTagMenu("list_user")}>Listar Usuarios</li>
      </ul>
    </>
  );
}

export function BanManagementMenu({ SetTagBan }) {
  return (
    <>
      <ul>
        <li onClick={() => SetTagBan("list_ban")}>Lista de Bloqueos</li>
        <li onClick={() => SetTagBan("create_ban")}>Crear Bloqueo</li>
      </ul>
    </>
  );
}

export function GuaranteeBanMenu({ SetWindowActive }) {
  return (
    <>
      <ul className="lists__items">
        <li onClick={() => SetWindowActive("register_guarantee")}>Registro</li>
        <li onClick={() => SetWindowActive("search_guarantee")}>
          Consulta de Garantía
        </li>
        <li onClick={() => SetWindowActive("files_guarantee")}>
          Archivos de Reclamación
        </li>
      </ul>
    </>
  );
}

export function GuaranteeSearchMenu() {
  return (
    <>
      <ul className="lists__items">
        <li>Registros</li>
        <li>Actualizaciones</li>
        <li>Reclamaciones</li>
        <li>Abonos por recuperación</li>
        <li>Devolución</li>
        <li>Pagos por reclamación</li>
      </ul>
    </>
  );
}
