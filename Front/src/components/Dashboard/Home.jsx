import { AuthContext } from "../../context/AuthContext";
import { useState, useContext } from "react";
import { getApiUrl } from "../../context/ApiContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../Templates/Menu";

import Swal from "sweetalert2";

export function Home() {
  const navigate = useNavigate();
  const { loginData } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const csrfToken = localStorage.getItem("csrfToken");

  const urlMyProfile = getApiUrl() + "/v1/myProfile";
  const urlLogout = getApiUrl() + "/v1/logout";

  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  const data = {
    data: "data",
  };

  async function SubmitMyProfile(e) {
    e.preventDefault();
    // console.log(token)
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

  const user = localStorage.getItem("user");
  if (user !== null && user !== undefined) {
    // todo esto es para modificar, para cambiar el token de local storage por el del estado
    return (
      <>
        <div id="container__fullwrapper" className="dashboard">
          <div id="sidebar">
            <div className="container__logo">
              <img src="./src/assets/images/logo.png" alt="Logo" />
            </div>
            <nav id="nav__sidebar">
              <NavBar setActive={"home"} />
              <li>
                <form onSubmit={SubmitMyProfile}>
                  <button className="wcbtn btn-simple">
                    <div className="container__icon">
                      <span className="wcicon outlined">person</span>
                    </div>
                    Mi perfil
                  </button>
                </form>
              </li>
              <hr />
              <li>
                <form onSubmit={SubmitLogout}>
                  <button className="wcbtn btn-simple">
                    <div className="container__icon">
                      <span className="wcicon outlined">logout</span>
                    </div>
                    Cerrar sesión
                  </button>
                </form>
              </li>
            </nav>
          </div>
          <div id="header">
            <div className="container__row-fullwidth">
              <div className="container__logo wcmovil">
                <img src="./src/assets/images/logo.png" alt="Logo" />
              </div>
              <div className="container__right">
                <a href="" className="user wcfullpc">
                  {user}
                  <span className="wcicon">expand_more</span>
                  <ul className="sub-menu">
                    <li>{user}</li>
                    <li>
                      <form onSubmit={SubmitMyProfile}>
                        <button className="wcbtn btn-simple">
                          <span className="wcicon outlined">edit</span>
                          Mi perfil
                        </button>
                      </form>
                    </li>
                    <li>
                      <form onSubmit={SubmitLogout}>
                        <button className="wcbtn btn-simple">
                          <span className="wcicon outlined">logout</span>
                          Cerrar sesión
                        </button>
                      </form>
                    </li>
                  </ul>
                </a>
                <a href="" className="nav__menu-movil wcmovil">
                  <span className="wcicon">menu</span>
                </a>
              </div>
            </div>
          </div>
          <div id="main__wrapper" className="dashboard">
            <div id="container__content">
              <div id="container__content-search"></div>
              <div id="container__content-content"></div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    window.location.replace("/login");
  }
}
