import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export default function TokenValidation() {
  const handleReSendToken = () => {
    console.log("Se maneja reenvio de token");
    //* se navega desde aca a home
  };
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
            <p id="request_retrieve_token" onClick={handleReSendToken}>
              No recibió su código, para reenviarlo a su correo registrado{" "}
              <strong>Click aquí</strong>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
