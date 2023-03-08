import React from "react";
import { Link } from "react-router-dom";

export function NavPanel() {
  return (
    <ul className="lists__items">
      <li className="active">
        <Link to="/dashboard/home">
          <div className="container__icon">
            <span className="wcicon outlined">home</span>
          </div>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/dashboard/users/profile">
          <div className="container__icon">
            <span className="wcicon outlined">person</span>
          </div>
          Usuarios
        </Link>
        <ul className="lists__items">
          <li>Editar mi perfil</li>
          <li>Gestion de Usuarios</li>
          <li>Roles</li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard/guarantee/register_guarantee">
          <div className="container__icon">
            <span className="wcicon outlined">settings</span>
          </div>
          Garantías
        </Link>

        <ul className="lists__items">
          <li>Registro</li>
          <li>Consulta de Garantía</li>
          <li>Archivos de Reclamación</li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard/reports/search-list">
          <div className="container__icon">
            <span className="wcicon outlined">assessment</span>
          </div>
          Informes
        </Link>
        <ul className="lists__items">
          <li>Informes</li>
          <li>Estadisticas</li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard/processes/system">
          <div className="container__icon">
            <span className="wcicon outlined">settings</span>
          </div>
          Procesos
        </Link>

        <ul className="lists__items">
          <li>Sistema</li>
          <li>Gestionar cobranza</li>
          <li>Ajuste de grantia</li>
          <li>Creacion de producto</li>
          <li>Gestionar intereses</li>
        </ul>
      </li>
      <li>
        <Link to="/dashboard/portfolio">
          <div className="container__icon">
            <span className="wcicon outlined">monetization_on</span>
          </div>
          Cartera
        </Link>
      </li>
      <li>
        <form>
          <button className="wcbtn btn-simple">
            <div className="container__icon">
              <span className="wcicon outlined">person</span>
            </div>
            Mi perfil
          </button>
        </form>
      </li>
      <hr />
      <li>
        <form>
          <button className="wcbtn btn-simple">
            <div className="container__icon">
              <span className="wcicon outlined">logout</span>
            </div>
            Cerrar sesión
          </button>
        </form>
      </li>
    </ul>
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
