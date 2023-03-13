import React from "react"
import { useSelector } from "react-redux"
import { getApiUrlBase } from "../../../../context/ApiContext"
import { useFetch } from "../../../../utils/useFetch"

function Records() {
  const loginState = useSelector((state) => state.loginConfirm)
  const headersToken = {
    Authorization: "Bearer " + loginState.token,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  }

  const urlApiRecords = getApiUrlBase() + "list-register-guarantee"
  const { loading, data } = useFetch(urlApiRecords, headersToken)
  console.log(loginState.token)
  console.log(data)

  return (
    <div className="records__container">
      <table className="records__table ">
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

          {loading && <div className="loader">Estoyyy cargandooooooooo</div>}
          {data?.message.length > 0 &&
            data.message.map((record) => (
              <tr key={record.id}>
                <td>{record.id || "no id"}</td>
                <td>{record.nit || "no nit"}</td>
                <td>{record.document || "no document"}</td>
                <td>{record.full_name || "no full_name"}</td>
                <td>{record.pay_code || "no pay_code"}</td>
                <td>{record.amount || "no amount"}</td>
                <td>{record.status || "no status"}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <ExportDataFields />
      </div>
    </div>
  )
}

export default Records

function ExportDataFields() {
  let downloadDataFieldsCKBS = []

  const handleDownload = (e) => {
    e.preventDefault()
    console.log("mandando solicitud a api")
  }

  const handleCheckbox = (e) => {
    const stateChk = e.target.checked
    console.log("🚀 ~ file: Records.jsx:94 ~ handleCheckbox ~ stateChk:", stateChk)

    const nameChk = e.target.name
    console.log("🚀 ~ file: Records.jsx:97 ~ handleCheckbox ~ nameChk:", nameChk)
    if (stateChk) {
      downloadDataFieldsCKBS.push(nameChk)
      console.log(downloadDataFieldsCKBS)
    } else {
      downloadDataFieldsCKBS.splice(downloadDataFieldsCKBS.indexOf(nameChk), 1)
      console.log(downloadDataFieldsCKBS)
    }
  }

  return (
    <form>
      <div className="export_data_fields__container" onClick={handleDownload}>
        <div className="download__record_data">
          <label>Selecciona los campos a extraer</label>
          <div className="container__icon">
            <span className="wcicon outlined">save_alt</span>
          </div>
        </div>
        <ul className="records__checkboxes_container">
          <li>
            <label htmlFor="brokerId">ID Intermediario</label>
            <input type="checkbox" id="brokerId" name="broker" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="identityDocument">Documento identidad</label>
            <input type="checkbox" id="identityDocument" name="identity_document" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="warrantyId">ID de garantia</label>
            <input type="checkbox" id="warrantyId" name="warranty_id" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="pay">Pagare</label>
            <input type="checkbox" id="pay" name="pay" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="namesLastNames">Nombres y apellidos</label>
            <input type="checkbox" id="namesLastNames" name="name_last_name" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="amountDisbursed">Monto desembolsado</label>
            <input type="checkbox" id="amountDisbursed" name="amouunt_disbursed" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="otherCollections">Otros cobros</label>
            <input type="checkbox" id="otherCollections" name="other_collections" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="disbursementCity">Cuidad desembolso</label>
            <input type="checkbox" id="disbursementCity" name="disbursement_city" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="productId">ID de producto</label>
            <input type="checkbox" id="productId" name="product_id" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="office">Sucursal</label>
            <input type="checkbox" id="office" name="office" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="sector">Sector</label>
            <input type="checkbox" id="sector" name="sector" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="completionDate">Fecha de desembolso</label>
            <input type="checkbox" id="completionDate" name="completion_date" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="terminationDate">Fecha terminacion</label>
            <input type="checkbox" id="terminationDate" name="termination_data" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="typeOfCredit">Tipo de credito</label>
            <input type="checkbox" id="typeOfCredit" name="type_of_credit" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="birthDay">Fecha nacimiento</label>
            <input type="checkbox" id="birthDay" name="birth_day" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="gender">Genero</label>
            <input type="checkbox" id="gender" name="gender" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="occupation">Ocupacion</label>
            <input type="checkbox" id="occupation" name="occupation" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="customerProfile">Perfil cliente</label>
            <input type="checkbox" id="customerProfile" name="custome_profile" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="previousPromissoryNote">Pagare anterior</label>
            <input
              type="checkbox"
              id="previousPromissoryNote"
              name="previous_promissory_note"
              onChange={handleCheckbox}
            />
          </li>
          <li>
            <label htmlFor="bailValue">Valor de fianza</label>
            <input type="checkbox" id="bailValue" name="bail_value" onChange={handleCheckbox} />
          </li>
          <li>
            <label htmlFor="state">Estado</label>
            <input type="checkbox" id="state" name="state" onChange={handleCheckbox} />
          </li>
        </ul>
      </div>
    </form>
  )
}
