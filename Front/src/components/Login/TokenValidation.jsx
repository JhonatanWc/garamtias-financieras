import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApiUrlBase } from "../../context/ApiContext";
import { confirmLogin } from "../../features/tasks/loginConfirmSlice";
import LobbyLogo from "../Dashboard/atoms/LobbyLogo";
export default function TokenValidation() {
  const [token, setToken] = useState("");
  const [resendingToken, setResendingToken] = useState(false);
  const loginConfirm = useSelector((state) => state.loginConfirm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const urlValidateToken = getApiUrlBase() + "validate-token";
  const urlResendToken = getApiUrlBase() + "resend-token";

  useEffect(() => {
    setTimeout(() => {
      setResendingToken(false);
    }, 2000);
  }, [resendingToken]);

  const handleReSendToken = () => {
    axios
      .post(urlResendToken, {
        person_id: loginConfirm.peopleId,
        login_id: loginConfirm.loginId,
      })
      .then((res) => {
        console.log(res.data.message);
        setResendingToken(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitConfirmToken = (e) => {
    e.preventDefault();
    console.log("urlValidateToken: " + urlValidateToken);
    axios
      .post(urlValidateToken, {
        login_id: loginConfirm.loginId,
        token: token,
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data.message == "success") {
          console.log("error, no se obtuvo respuesta de validacion de token");
          return;
        }
        dispatch(confirmLogin(res.data.token));
        navigate("/dashboard/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(
    "🚀 ~ file: TokenValidation.jsx:60 ~ submitConfirmToken ~ urlValidateToken:",
    urlValidateToken
  );
  console.log(
    "🚀 ~ file: TokenValidation.jsx:60 ~ submitConfirmToken ~ urlValidateToken:",
    urlValidateToken
  );

  return (
    <>
      <div id="main__wrapper" className="login">
        <div className="container__row">
          <form onSubmit={submitConfirmToken}>
            <LobbyLogo urlImagePath="./src/assets/images/logo.png" />
            <h1>Token de acceso</h1>
            <div className="wcrow">
              <div className="wccol-sm-12 wccol-md12">
                <label>Token</label>
                <input
                  type="text"
                  placeholder="Ingrese el token que recibio via email"
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                  value={token}
                />
              </div>
            </div>
            <button className="wcbtn btn-primary btn-lg btn-block">
              Verificar token
            </button>

            {resendingToken ? (
              <p className="alert-text">Se ha enviado token a su correo</p>
            ) : (
              <p
                id="request_retrieve_token"
                onClick={(e) => handleReSendToken(e)}
              >
                No recibió su código, para reenviarlo a su correo registrado{" "}
                <strong>Click aquí</strong>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
