import {GuaranteeSearchMenu} from '../../Templates/Menu'
export function SearchGuarantee(){
    return(
        <>
            <form>
                <div>
                    <div>
                        <label>Documento cliente garantizado</label>
                        <input type="text" placeholder="Documento cliente garantizado"></input>
                    </div>
                    <div>
                        <label>Intermediario</label>
                        <input type="text" placeholder="Intermediario"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>ID Garantía</label>
                        <input type="text" placeholder="ID Garantía"></input>
                    </div>
                    <div>
                        <label>Pagaré</label>
                        <input type="text" placeholder="Pagaré"></input>
                    </div>
                </div>
                <div>
                    <p>Seleccione rango de fechas</p>
                    <div>
                        <label>Inicio</label>
                        <input type="date" ></input>
                    </div>
                    <div>
                        <label>Final</label>
                        <input type="date" ></input>
                    </div>
                </div>
                <div>
                    <div>
                        <button>Buscar</button>
                    </div>
                    <div>
                        <button>Limpiar</button>
                    </div>
                </div>
            </form>
            <div>
                <div>
                    <GuaranteeSearchMenu/>
                    <TableDataGuarantee/>
                </div>
                <div>
                    <ExportDataFields/>
                </div>
            </div>
        </>
    )
}

function TableDataGuarantee(){
    return (
        <>
            <table>
                <thead>
                    <th><strong>ID</strong></th>
                    <th><strong>Intermediario</strong></th>
                    <th><strong>Documento</strong></th>
                    <th><strong>Nombre</strong></th>
                    <th><strong>Pagaré</strong></th>
                    <th><strong>Monto</strong></th>
                    <th><strong>Estado</strong></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src="src\assets\images\viewMore.png"></img></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function ExportDataFields(){
    return(
        <>
            <div>
                <label>Selecciona los campos a extraer</label>
                <button>Descargar</button>
            </div>
            <ul>
                <li><input type="checkbox" /> ID Intermediario</li>
                <li><input type="checkbox" /> Documento de identidad</li>
                <li><input type="checkbox" /> ID de garantía</li>
                <li><input type="checkbox" /> Pagaré</li>
                <li><input type="checkbox" /> Nombres y Apellidos</li>
                <li><input type="checkbox" /> Monto desembolsado</li>
                <li><input type="checkbox" /> Otros cobros</li>
                <li><input type="checkbox" /> Ciudad desembolso</li>
                <li><input type="checkbox" /> ID de producto</li>
                <li><input type="checkbox" /> Sucursal</li>
                <li><input type="checkbox" /> Sector</li>
                <li><input type="checkbox" /> Fecha de desembolso</li>
                <li><input type="checkbox" /> Fecha terminación</li>
                <li><input type="checkbox" /> Tipo crédito</li>
                <li><input type="checkbox" /> Fecha de nacimiento</li>
                <li><input type="checkbox" /> Género</li>
                <li><input type="checkbox" /> Ocupación</li>
                <li><input type="checkbox" /> Perfil cliente</li>
                <li><input type="checkbox" /> Pagaré anterior</li>
                <li><input type="checkbox" /> Valor de fianza</li>
                <li><input type="checkbox" /> Estado</li>
            </ul>
        </>
    )
}