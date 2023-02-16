export function MyProfile(){
    return(
        <>
            <form>
                <div>
                    <div>
                        <label>Documento / NIT <span className="requiredField">*</span></label>
                        <input type="text" placeholder="Documento / NIT"></input>
                    </div>
                    <div>
                        <label>Nombre Completo /  Razón Social <span className="requiredField">*</span></label>
                        <input type="text" placeholder="Nombre Completo /  Razón Social"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Rol </label>
                        <select>
                            <option> -- Selecione --</option>
                        </select>
                    </div>
                    <div>
                        <label>Correo Electrónico <span className="requiredField">*</span></label>
                        <input type="email" placeholder="Correo Electrónico"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Casa de Cobranza </label>
                        <select>
                            <option> -- Selecione --</option>
                        </select>
                    </div>
                    <div>
                        <label>Intermediario </label>
                        <select>
                            <option> -- Selecione --</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Contraseña <span className="requiredField">*</span></label>
                        <input type="password" placeholder="Contraseña"></input>
                    </div>
                    <div>
                        <label>Ciudad <span className="requiredField">*</span></label>
                        <input type="text" placeholder="Ciudad"></input>
                    </div>
                </div>
                <div>
                    <div>
                       <button>Cancelar</button>
                    </div>
                    <div>
                        <button>Actualizar</button>
                    </div>
                </div>
            </form>
        </>
    )
}