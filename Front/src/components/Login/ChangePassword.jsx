import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiUrlBase } from "../../context/ApiContext";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

function ChangePassword() {
  // ! se intento implementar en useEffect, de varias mañas nos e logro, no pero no dejaba disponer de las variables desde, tema a revisar
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get("token");
  const email = urlParams.get("email");
  console.log(token); //todo para remover
  console.log(email); //todo para remover

  const [newPass, setNewPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const navigate = useNavigate();

  const urlRecoveryPassword = getApiUrlBase() + "recovery-password";

  const SubmitChangePassForm = (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      alert("Las contraseñas no son iguales");
      return;
    } else {
      axios
        .post(urlRecoveryPassword, {
          user_email: email,
          user_password: newPass,
          user_token: token,
        })
        .then((res) => {
          console.log(res.data.message);
          if (res.data.status == "200") {
            alert(
              "Su contraseña ha sido correctamente, inicia sesion por favor"
            );
            navigate("/login");
          }
        });
    }
  };
  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form onSubmit={SubmitChangePassForm}>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1 className="title_login">Cambiar contraseña</h1>
            <div className="wcrow">
              <div className="wccol-sm-12 wccol-md12">
                <label>Nueva contraseña</label>
                <input
                  type="password"
                  placeholder="Coloque su nueva contraseña"
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                  value={newPass}
                />
              </div>
            </div>
            <div className="wcrow">
              <div className="wccol-sm-12 wccol-md12">
                <label>Confirmar contraseña</label>
                <input
                  type="password"
                  placeholder="Repita su nueva contraseña"
                  onChange={(e) => {
                    setconfirmPass(e.target.value);
                  }}
                  value={confirmPass}
                />
              </div>
            </div>
            <button className="wcbtn btn-primary btn-lg btn-block">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
