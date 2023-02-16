export function RegisterGuarantee(){
    return (
        <>
            <h1>Que vamos a registrar</h1>
            <form>
                <div>
                    <div>
                        <label>Selecciona el tipo de archivo a subir</label>
                        <select>
                            <option>-- Seleccione --</option>
                        </select>
                    </div>
                    <div>
                        <label>Selecciona el archivo</label>
                        <input type="file"></input>
                    </div>
                </div>
                <div>
                    <button>Cancelar</button>
                </div>
                <div>
                    <button>Enviar</button>
                </div>
            </form>
        </>
    )

    
}