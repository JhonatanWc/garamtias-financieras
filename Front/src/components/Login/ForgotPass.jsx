import LobbyLogo from "../Dashboard/atoms/LobbyLogo";
import { useState } from "react";

export default function ForgotPass() {
  const [emailSended, setEmailSended] = useState(false);

  const handleSend = () => {
    // ? aqui iria tambien el tema de la peticion de envio de correo
    setEmailSended(true);
  };

  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1>Recupere su contraseña</h1>
          </form>
          {emailSended ? (
            <EmailSended />
          ) : (
            <SendEmail handleSend={handleSend} />
          )}
        </div>
      </div>
    </>
  );
}

function SendEmail({ handleSend }) {
  return (
    <>
      <div className="wcrow">
        <div className="wccol-sm-12 wccol-md12">
          <label>Direccion de correo electronico</label>
          <input
            type="text"
            placeholder="Ingrese el token que recibio via email"
          />
        </div>
      </div>
      <button
        className="wcbtn btn-primary btn-lg btn-block"
        onClick={handleSend}
      >
        Enviar correo de recuperacion
      </button>
    </>
  );
}

function EmailSended() {
  return (
    <p id="recover-password-msg">
      Hemos enviado un correo, revisalo y da click al link de recuperacion.
    </p>
  );
}
