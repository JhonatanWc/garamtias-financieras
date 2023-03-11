import axios from "axios";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApiUrlBase } from "../../context/ApiContext";
import { AuthContext } from "../../context/AuthContext";
import { setUserData } from "../../features/tasks/loginConfirmSlice";

import Swal from "sweetalert2";

export function Home() {
  const navigate = useNavigate();
  const { loginData } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const csrfToken = localStorage.getItem("csrfToken");

  const urlMyProfile = getApiUrlBase() + "myProfile";
  const urlLogout = getApiUrlBase() + "logout";

  // ? recogiendo el estado de login en redux
  const loginState = useSelector((state) => state.loginConfirm);
  const appState = useSelector((state) => state.appState);
  const dispatch = useDispatch();

  const headers = {
    Authorization: "Bearer " + loginState.token,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  const data = {
    data: "data",
  };

  useEffect(() => {
    console.log("useEffect entre");
    /*
    const persons = getResponse.data;
    let loginDataStart = {
      peopleId: 2,
      peopleEmail: "leonelmirawc@gmail.com",
      loginId: 2,
      token: "19|ofLGyZeFEraoxF9O66vkGSZ0JYSGOq5hDKkHm94x",
    };
    dispatch(setLoginDataStart(loginDataStart));
    */
    console.log("loginState.token: " + loginState.token);
    console.log("loginState.peopleName: " + loginState.peopleName);

    if (loginState.token != "no token" && loginState.peopleName == "no name") {
      axios
        .get(urlMyProfile, {
          headers: headers,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(setUserData(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  async function SubmitMyProfile(e) {
    e.preventDefault();
    console.log("urlMyProfilen: " + urlMyProfile);
    axios
      .get(urlMyProfile, {
        headers: headers,
      })
      .then((res) => {
        const info = res.data;
        console.log(info);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function SubmitLogout(e) {
    e.preventDefault();

    Swal.fire({
      title: "Atencion!",
      text: "Estas apunto de terminar tu session, deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        // todo intentar remover data y trabajar solo con un objeto vacio
        axios
          .post(urlLogout, data, {
            headers: headers,
          })
          .then((res) => {
            console.log(res.data);
            localStorage.clear();
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  // todo es necesario cambiar este barrier autenticacion a dashboar y que el lo maneje todo
  if (loginState.token !== "no token") {
    return (
      <>
        <div id="container__fullwrapper" className="dashboard">
          <div id="main__wrapper" className="dashboard">
            <div id="container__content"></div>
          </div>
        </div>
      </>
    );
  } else {
    console.log("Intentando meterse el login por falta de token de usuario");
    //window.location.replace("/login");
    return (
      <>
        <p>usuario no logueado</p>
      </>
    );
  }
}
