
import React from 'react';


export function NavBar(){
    return (
        <div className="sideNav">
            
            <ul>
                <li><img src='src\assets\images\logo.png'></img></li>
                <li><a href='/home'>Home</a></li>
                <li><a href='/users'>Usuarios</a></li>
                <li><a href='/guarantee'>Garantias</a></li>
                <li><a href='/reports'>Informes</a></li>
                <li><a href='/processes'>Procesos</a></li>
                <li><a href='/wallet'>Cartera</a></li>
            </ul>
        </div>
    )
}

export function UserNavBar({SetWindowActive}){
    return (
        <>
            <ul>
                <li onClick={() => SetWindowActive("profile")}>Editar mi perfil</li>
                <li onClick={() => SetWindowActive("users")}>Gestion de Usuarios</li>
                <li onClick={() => SetWindowActive("roles")}>Roles</li>
                <li onClick={() => SetWindowActive("ban")}>Bloqueos</li>
            </ul>
        </>
    )
}

export function UserManagementMenu({SetTagMenu}){
    return (
        <>
            <ul>
                <li onClick={() => SetTagMenu("create_user")}>Gestion De usuario</li>
                <li onClick={() => SetTagMenu("search_user")}>Busqueda por filtro</li>
                <li onClick={() => SetTagMenu("list_user")}>Listar Usuarios</li>
            </ul>
        </>
    )
}

export function BanManagementMenu({SetTagBan}){
    return (
        <>
            <ul>
                <li onClick={() => SetTagBan("list_ban")}>Lista de Bloqueos</li>
                <li onClick={() => SetTagBan("create_ban")}>Crear Bloqueo</li>
            </ul>
        </>
    )
}

export function GuaranteeBanMenu({SetWindowActive}){
    return(
        <>
            <ul>
                <li onClick={() => SetWindowActive("register_guarantee")}>Registro</li>
                <li onClick={() => SetWindowActive("search_guarantee")}>Consulta de Garantía</li>
                <li onClick={() => SetWindowActive("files_guarantee")}>Archivos de Reclamación</li>
            </ul>
        </>
    )
}

export function GuaranteeSearchMenu(){
    return (
        <>
            <ul>
                <li>Registros</li>
                <li>Actualizaciones</li>
                <li>Reclamaciones</li>
                <li>Abonos por recuperación</li>
                <li>Devolución</li>
                <li>Pagos por reclamación</li>
            </ul>
        </>
    )
}