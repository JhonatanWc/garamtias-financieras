import React from "react";

function CreateRole() {
  return (
    <div>
      <div className="modal-create-rol">
        <div className="container__crol_header">
          <input type="text" placeholder="Nombre de rol" />
          <button>Crear rol</button>
        </div>
        <div className="container__crol_section">
          <h6>Permisos que tendra</h6>
          <div className="container__permissions">
            <div className="input-checkbox permission">
              <input type="checkbox" id="check3" /> Permiso1
              <label htmlFor="check3">
                <span class="fa fa-check" />
              </label>
            </div>
            <div className="input-checkbox permission">
              <input type="checkbox" id="check3" /> Permiso2
              <label htmlFor="check3">
                <span class="fa fa-check" />
              </label>
            </div>
            <div className="input-checkbox permission">
              <input type="checkbox" id="check3" /> Permiso3
              <label htmlFor="check3">
                <span class="fa fa-check" />
              </label>
            </div>
            <div className="input-checkbox permission">
              <input type="checkbox" id="check3" /> Permiso4
              <label htmlFor="check3">
                <span class="fa fa-check" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRole;
