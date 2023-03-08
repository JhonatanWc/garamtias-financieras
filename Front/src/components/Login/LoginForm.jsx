import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getApiUrl } from "../../context/ApiContext";
import { setLoginDataStart } from "../../features/tasks/loginConfirmSlice";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";

export function FormLogin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [UserLogin, SetUserLogin] = useState("");
  const [UserPassword, SetUserPassword] = useState("");

  const urlLogin = getApiUrl() + "/v1/login";

  const SubmitLoginForm = (e) => {
    e.preventDefault();

    axios
      .post(urlLogin, {
        user_email: UserLogin,
        user_password: UserPassword,
      })
      .then((getResponse) => {
        // todo pendiente refactor
        const persons = getResponse.data;
        let loginDataStart = {
          peopleId: persons.people_id,
          peopleEmail: persons.people_email,
          loginId: persons.login_id,
        };
        dispatch(setLoginDataStart(loginDataStart));
        setTimeout(() => {}, 500);
        if (persons.status == 200) {
          navigate("/token-validation");
        } else {
          // todo pendiente temas de alertas
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: persons.message,

          // })
          console.log(persons.message);
        }
      })
      .catch((err) => {
        console.log(err);
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

              <Link to="/forgot-password">
                <p id="request_retrieve_token">
                  ¿Olvidaste tu contraseña? has <strong>Click aquí</strong>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    window.location.replace("/home");
  }
}
