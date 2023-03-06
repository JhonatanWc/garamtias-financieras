import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export default function TokenValidation() {
  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1>Token de acceso</h1>
            <div className="wcrow">
              <div className="wccol-sm-12 wccol-md12">
                <label>Token</label>
                <input
                  type="text"
                  placeholder="Ingrese el token que recibio via email"
                />
              </div>
            </div>
            <button className="wcbtn btn-primary btn-lg btn-block">
              Enviar token
            </button>
            <a href="#">
              <p id="request_retrieve_token">
                No recibió su código, para reenviarlo a su correo registrado{" "}
                <strong>Click aquí</strong>
              </p>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
