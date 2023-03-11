import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle, data }) =>
  visible
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-dialog" role="dialog" aria-modal="true">
            <h6># - Nombre rol:</h6>
            <h3>
              {data.id} - {data.role_name}
            </h3>
            <h6>Permisos que tiene</h6>
            <ul>{data.permissions}</ul>
            <ul>
              {() => {
                const permissions = JSON.parse(data.permissions);
                console.log("desde la funciona anonima");
                permissions.map((permission) => {
                  <li>{permission}</li>;
                });
              }}
            </ul>
            <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus
              nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt.
              Vero odio voluptatem sunt sunt laboriosam.
            </p>
            <button type="button" onClick={toggle}>
              Close
            </button>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;

export default Modal;
