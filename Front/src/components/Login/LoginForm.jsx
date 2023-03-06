import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export function FormLogin() {
  const { createLoginSession } = useContext(AuthContext);

  const navigate = useNavigate();
  const [UserLogin, SetUserLogin] = useState("");
  const [UserPassword, SetUserPassword] = useState("");
  const [LoginResponse, SetLoginResponse] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  const urlLogin = getApiUrl() + "/v1/login";

  const SubmitLoginForm = (e) => {
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

  const user = localStorage.getItem("user");
  if (user === null || user === undefined) {
    return (
      <>
        <div id="main__wrapper" className="login">
          <div className="container__row">
            <form onSubmit={SubmitLoginForm}>
              <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
              <div className="wcrow">
                <div className="wccol-sm-12 wccol-md12">
                  <label>Correo electrónico</label>
                  <input
                    type="text"
                    placeholder="Correo electrónico"
                    onChange={(e) => {
                      SetUserLogin(e.target.value);
                    }}
                    value={UserLogin}
                  />
                </div>
              </div>
              <div className="wcrow">
                <div className="wccol-sm-12 wccol-md12">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => {
                      SetUserPassword(e.target.value);
                    }}
                    value={UserPassword}
                  />
                </div>
              </div>
              <button className="wcbtn btn-primary btn-lg btn-block">
                Iniciar sesión
              </button>

              <a href="#">
                <p id="request_retrieve_token">
                  ¿Olvidaste tu contraseña? has <strong>Click aquí</strong>
                </p>
              </a>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    window.location.replace("/home");
  }
  console.log("🚀 ~ file: LoginForm.jsx:95 ~ FormLogin ~ input:", input);
}
