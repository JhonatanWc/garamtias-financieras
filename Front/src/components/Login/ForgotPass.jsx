import axios from "axios";
import { useState } from "react";
import { getApiUrlBase } from "../../context/ApiContext";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export default function ForgotPass() {
  const [emailField, setEmailField] = useState("");
  const [emailSended, setEmailSended] = useState(false);

  const urlForgotPassword = getApiUrlBase() + "forgot-password";

  const handleSend = () => {
    axios
      .post(urlForgotPassword, {
        user_email: emailField,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.status == "200") {
          setEmailSended(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1 id="forgot-pass-title">Recupere su contraseña</h1>
          </form>
          {emailSended ? (
            <p id="recover-password-msg">
              Hemos enviado un correo, revisalo y da click al link de
              recuperacion.
            </p>
          ) : (
            <>
              <div className="wcrow">
                <div className="wccol-sm-12 wccol-md12">
                  <label>Direccion de correo electronico</label>
                  <input
                    type="text"
                    placeholder="Ingrese el token que recibio via email"
                    onChange={(e) => setEmailField(e.target.value)}
                    value={emailField}
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
          )}
        </div>
      </div>
    </>
  );
}
