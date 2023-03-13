import { Link, Outlet } from "react-router-dom"
export function GuaranteeConsultation() {
  return (
    <>
      <form>
        <div className="guarantee__cont_row">
          <div className="child__row_cols2">
            <label>Documento cliente garantizado</label>
            <input type="text" placeholder="Documento cliente garantizado"></input>
          </div>
          <div className="child__row_cols2">
            <label>Intermediario</label>
            <input type="text" placeholder="Intermediario"></input>
          </div>
        </div>
        <div className="guarantee__cont_row">
          <div className="child__row_cols2">
            <label>ID Garantía</label>
            <input type="text" placeholder="ID Garantía"></input>
          </div>
          <div className="child__row_cols2">
            <label>Pagaré</label>
            <input type="text" placeholder="Pagaré"></input>
          </div>
        </div>
        <div className="guaranteee_ds_container">
          <div id="container__date_resolver">
            <div>
              <p id="label-date-select">Seleccione rango de fechas</p>
            </div>
            <div className="guarantee__cont_row">
              <div className="child__rdate_cols2">
                <label>Inicio</label>
                <input type="date"></input>
              </div>
              <div className="child__rdate_cols2">
                <label>Final</label>
                <input type="date"></input>
              </div>
            </div>
          </div>
          <div id="guarantee__search_buttons">
            <div>
              <button>Buscar</button>
            </div>
            <div>
              <button>Limpiar</button>
            </div>
          </div>
        </div>
      </form>
      <div id="guanrantee__consultation_body">
        <div id="tabs__table_gconsult_container">
          <nav className="sub_tabs" id="guarantee_consult">
            <Link to="/dashboard/guarantee/consultation/records">
              <button>Registros</button>
            </Link>
            <Link to="/dashboard/guarantee/consultation/updates">
              <button>Actualizaciones</button>
            </Link>
            <Link to="/dashboard/guarantee/consultation/claims">
              <button>Reclamaciones</button>
            </Link>
            <Link to="/dashboard/guarantee/consultation/recovery-payments">
              <button>Abonos por recuperación</button>
            </Link>
            <Link to="/dashboard/guarantee/consultation/payments-per-claim">
              <button>Pagos por reclamación</button>
            </Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export function TableDataGuarantee() {
  return (
    <>
      <table>
        <thead>
          <th>
            <strong>ID</strong>
          </th>
          <th>
            <strong>Intermediario</strong>
          </th>
          <th>
            <strong>Documento</strong>
          </th>
          <th>
            <strong>Nombre</strong>
          </th>
          <th>
            <strong>Pagaré</strong>
          </th>
          <th>
            <strong>Monto</strong>
          </th>
          <th>
            <strong>Estado</strong>
          </th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>???????</td>
            <td>21835182</td>
            <td>Ana judith</td>
            <td>??</td>
            <td>500000</td>
            <td>undefined</td>
            <td>
              <div className="container__icon">
                <span className="wcicon outlined">person_search</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
