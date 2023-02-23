import {useState, useEffect} from 'react'

export function GuaranteeDetails(){
    return(
        <>
            <GuaranteeInfo/>
            <ProductInfo/>
            <GuaranteeHistory/>
        </>
    )
}

function GuaranteeInfo(){
    return(
        <>
            <form>
                <div>
                    <div>
                        <label>NIT Intermediario</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Documento</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                <div>
                    <label>Pagare</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Nombre completo</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Pagare</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Nombre completo</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Monto</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Producto</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Pago anterior</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Otros</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Ciudad de distribucion</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Surcursal</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Ciudad de distribucion</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Surcursal</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Fecha de desembolso</label>
                        <input type="text" readOnly></input>
                    </div>
                    <div>
                        <label>Fecha de terminacion</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Tipo de credito</label>
                        <input type="text" readOnly></input>
                    </div>
                </div>
            </form>
        </>
    )
}

function ProductInfo(){
    return (
        <>
            <form>
                <div>
                    <div>
                        <label>¿Calcula IVA?</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Número de  factura</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Monto</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Producto</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>% fianza</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Modalidad</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Valor de fianza</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Valor de IVA</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Valor factura</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Disponible generado ()</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Comercialización generada</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Bonificación generada</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Comercialización generada</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Bonificación generada</label>
                        <input readOnly></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Distribución generada</label>
                        <input readOnly></input>
                    </div>
                    <div>
                        <label>Margen GFSAS</label>
                        <input readOnly></input>
                    </div>
                </div>
            </form>
        </>
    )
}

function GuaranteeHistory(){
    return (
        <>
            <table>
                <thead>
                    <th><strong>Fecha de corte</strong></th>
                    <th><strong>Capital</strong></th>
                    <th><strong>Intereses</strong></th>
                    <th><strong>Otros</strong></th>
                    <th><strong>Total</strong></th>
                    <th><strong>Inicio de mora</strong></th>
                    <th><strong>Valor comision</strong></th>
                    <th><strong>Nro de factura</strong></th>
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
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function ClaimsHistory(){
    
}