import {useState, useContext} from 'react'
import {BanManagementMenu} from '../../Templates/Menu'

export function BanManagement(){
    const [TagBan, SetTagBan] = useState("")

    return(
        <>
            <BanManagementMenu SetTagBan={SetTagBan}/>
            {TagBan === "list_ban" ? <ListBans /> : <></>}
            {TagBan === "create_ban" ? <CreateBan /> : <></>}
        </>
    )
}

function ListBans(){
    return (
        <>
            <table>
                <thead>
                    <th><strong>Documento / NIT</strong></th>
                    <th><strong>Tipo de bloqueo</strong></th>
                    <th><strong>Fecha inicio</strong></th>
                    <th><strong> Fecha fin</strong></th>
                    <th><strong>Motivo</strong></th>
                </thead>
                <tbody>
                    <tr>
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

function CreateBan(){
    return (
        <>
            <form>
                <div>
                    <div>
                        <label>Documento / NIT</label>
                        <input type="text" placeholder='Documento / NIT'></input>
                    </div>
                    <div>
                        <label>¿El bloqueo tendrá tiempo fijo?</label>
                        <input type="checkbox" placeholder='¿El bloqueo tendrá tiempo fijo?'></input>
                        <input type="date"></input>
                        <input type="date"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Motivo</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div>
                    <button>Buscar</button>
                </div>
                <div>
                    <button>Limpiar</button>
                </div>
            </form>
        </>
    )
}