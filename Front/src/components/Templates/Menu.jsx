
import React from 'react';


export function NavBar(){
    return (
            <ul className="lists__items">
                <li className="active">
                    <a href='/home'>
                        <div className="container__icon"><span className="wcicon outlined">home</span></div>
                        Home
                    </a>
                </li>
                <li>
                    <a href='/users'>
                        <div className="container__icon"><span className="wcicon outlined">person</span></div>
                        Usuarios
                    </a>
                </li>
                <li>
                    <a href='/guarantee'>
                        <div className="container__icon"><span className="wcicon outlined">settings</span></div>
                        Garantías
                    </a>
                </li>
                <li>
                    <a href='/reports'>
                        <div className="container__icon"><span className="wcicon outlined">assessment</span></div>
                        Informes
                    </a>
                </li>
                <li>
                    <a href='/processes'>
                        <div className="container__icon"><span className="wcicon outlined">settings</span></div>
                        Procesos
                    </a>
                </li>
                <li>
                    <a href='/wallet'>
                        <div className="container__icon"><span className="wcicon outlined">monetization_on</span></div>
                        Cartera
                    </a>
                </li>
            </ul>
    )
}

export function UserNavBar({SetWindowActive}){
    return (
        <>
            <ul className="lists__items">
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
            <ul className="lists__items">
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
            <ul className="lists__items">
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
            <ul className="lists__items">
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