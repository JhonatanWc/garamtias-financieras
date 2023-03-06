import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export default function TokenValidation() {
  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1>Recupere su contraseña</h1>
            <div className="wcrow">
              <div className="wccol-sm-12 wccol-md12">
                <label>Direccion de correo electronico</label>
                <input
                  type="text"
                  placeholder="Ingrese el token que recibio via email"
                />
              </div>
            </div>
            <button className="wcbtn btn-primary btn-lg btn-block">
              Enviar correo de recuperacion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
