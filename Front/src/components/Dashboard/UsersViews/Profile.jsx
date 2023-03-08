export function MyProfile() {
  return (
    <>
      <form>
        <h2>Editar mi perfil</h2>
        <div className="wcrow">
          <div className="wccol-sm-12 wccol-md-6">
            <label>
              Documento / NIT <span className="requiredField">*</span>
            </label>
            <input type="text" placeholder="Documento / NIT"></input>
          </div>
          <div className="wccol-sm-12 wccol-md-6">
            <label>
              Nombre Completo / Razón Social{" "}
              <span className="requiredField">*</span>
            </label>
            <input
              type="text"
              placeholder="Nombre Completo /  Razón Social"
            ></input>
          </div>
        </div>
        <div className="wcrow">
          <div className="wccol-sm-12 wccol-md-6">
            <label>Rol</label>
            <select>
              <option> -- Selecione --</option>
            </select>
          </div>
          <div className="wccol-sm-12 wccol-md-6">
            <label>
              Correo Electrónico <span className="requiredField">*</span>
            </label>
            <input type="email" placeholder="Correo Electrónico"></input>
          </div>
        </div>
        <div className="wcrow">
          <div className="wccol-sm-12 wccol-md-6">
            <label>Casa de Cobranza</label>
            <select>
              <option> -- Seleccione --</option>
            </select>
          </div>
          <div className="wccol-sm-12 wccol-md-6">
            <label>Intermediario</label>
            <select>
              <option> -- Seleccione --</option>
            </select>
          </div>
        </div>
        <div className="wcrow">
          <div className="wccol-sm-12 wccol-md-6">
            <label>
              Contraseña <span className="requiredField">*</span>
            </label>
            <input type="password" placeholder="Contraseña"></input>
          </div>
          <div className="wccol-sm-12 wccol-md-6">
            <label>
              Confirmar contraseña <span className="requiredField">*</span>
            </label>
            <input type="password" placeholder="Confirmar Contraseña"></input>
          </div>
        </div>
        <div className="wcrow">
          <div className="wccol-sm-12 wccol-md-12">
            <label>
              Ciudad <span className="requiredField">*</span>
            </label>
            <input type="text" placeholder="Ciudad"></input>
          </div>
        </div>
        <div className="wcrow actions">
          <div className="wccol-sm-12 wccol-md-12">
            <button className="wcbtn btn-simple btn-lg cancel">Cancelar</button>
            <button className="wcbtn btn-primary btn-lg save">
              Actualizar
            </button>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </form>
    </>
  );
}
