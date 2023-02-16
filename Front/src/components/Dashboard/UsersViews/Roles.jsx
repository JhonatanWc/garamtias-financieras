export function Roles(){
    return (
        <>
            <div>
                <div>
                    <button>Buscar</button>
                </div>
                <div>
                    <button>Limpiar</button>
                </div>
            </div>
            <div>
                <TableRoles />
            </div>
        </>
    )
}


function TableRoles(){
    <>
        <table>
            <thead>
                <th><strong>ID</strong></th>
                <th><strong>NIT</strong></th>
                <th><strong>Rol</strong></th>
                <th><strong>Acciones</strong></th>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
}