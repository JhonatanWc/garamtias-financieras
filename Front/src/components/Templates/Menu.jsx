
import React from 'react';

export function NavBar(){
    return (
        <div className="sideNav">
            
            <ul>
                <li>Logo</li>
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