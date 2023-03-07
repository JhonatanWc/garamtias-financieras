import React from "react";
import { useState } from "react";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

function ChangePassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const SubmitChangePassForm = (e) => {
    e.preventDefault();
    axios
      .get(urlLogin, {
        params: {
          user_login: UserLogin,
          user_password: UserPassword,
        },
      })
      .then((res) => {
        const persons = res.data;
        SetLoginResponse(persons);
        console.log(LoginResponse);

        if (LoginResponse.status == 200) {
          localStorage.setItem("token", LoginResponse.token); //! estos detalles hay que quitarlos porque ahora es con la validacion del token
          localStorage.setItem("user", UserLogin);
          localStorage.setItem("csrfToken", LoginResponse.csrfToken);
          navigate("/home");
        } else {
          console.log(LoginResponse.message);
        }
      });
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
                  type="text"
                  placeholder="Correo electrónico"
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
                  placeholder="Contraseña"
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
