import {useState, useContext} from 'react'
import {UserManagementMenu} from '../../Templates/Menu'

export function UserManagement(){

    const [TagMenu, SetTagMenu] = useState("")
    return (
        <>
            <UserManagementMenu SetTagMenu={SetTagMenu}/>
            {TagMenu === "create_user" ? <CreateUser /> : <></>}
            {TagMenu === "search_user" ? <p>search_user</p> : <></>}
            {TagMenu === "list_user" ? <p>list_user</p> : <></>}
            
        </>
    )
}

function CreateUser(){
    return (
        <form>
            <div>
                <div>
                    <label>Documento / NIT</label>
                    <input type="text" placeholder="Documento / NIT"></input>
                </div>
                <div>
                    <label>Nombre Completo /  Razón Social</label>
                    <input type="text" placeholder="Nombre Completo /  Razón Social"></input>
                </div>
            </div>
            <div>
                <div>
                    <label>Rol</label>
                    <select>
                        <option> -- Seleccione -- </option>
                    </select>
                </div>
                <div>
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="Correo Electrónico"></input>
                </div>
            </div>
            <div>
                <div>
                    <label>Ciudad</label>
                    <input type="text" placeholder="Ciudad"></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña"></input>
                </div>
            </div>
        </form>
    )
}