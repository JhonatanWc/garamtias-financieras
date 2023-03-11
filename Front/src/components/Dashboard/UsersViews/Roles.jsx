import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiUrlBase } from "../../../context/ApiContext";
import { useFetch } from "../../../utils/useFetch";
import Modal from "./Roles/Modal";
import useModal from "../../../utils/useModal";

export function Roles() {
  const loginState = useSelector((state) => state.loginConfirm);
  console.log(loginState.token);
  const headersToken = {
    Authorization: "Bearer " + loginState.token,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  const urlRoleList = getApiUrlBase() + "list-role";
  const { loading, data } = useFetch(urlRoleList, headersToken);
  const [roleSelected, setRoleSelected] = useState({});

  const [toggle, visible] = useModal();

  return (
    <>
      <div>
        <div>
          <button id="crear-rol-action">Crear rol</button>
        </div>
        <div className="top__actions">
          <div>
            <input type="text" />
          </div>
          <div>
            <button>Limpiar</button>
          </div>
          <div>
            <button>Buscar</button>
          </div>
        </div>
      </div>

      <div>
        <table className="wctable role__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre de rol</th>
              <th>Permisos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading && <div className="loader">Estoyyy cargandooooooooo</div>}
            {data?.permissions.length > 0 &&
              data.permissions.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.role_name}</td>
                  <td>
                    <Permissions permissions={role.permissions} />
                  </td>
                  <td>
                    <div className="actions-style">
                      <div
                        onClick={() => {
                          setRoleSelected(role);
                          toggle();
                        }}
                        className="container__icon actions-icons"
                      >
                        <span className="wcicon outlined">edit</span>
                      </div>
                      <div className="container__icon actions-icons">
                        <span className="wcicon outlined">person_search</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal visible={visible} toggle={toggle} data={roleSelected}></Modal>
    </>
  );
}

export default Roles;

function Permissions({ permissions }) {
  if (typeof permissions === "string") {
    const perParsed = JSON.parse(permissions);
    return (
      <>
        {perParsed.map((permission) => {
          return <div id="permissions">{permission}</div>;
        })}
      </>
    );
  } else {
    return <div id="no-permission">❌ Sin permiso</div>;
  }
}
