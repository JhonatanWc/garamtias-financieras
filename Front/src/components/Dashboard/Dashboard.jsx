import React from "react"
import { Outlet } from "react-router-dom"
import { NavPanel } from "../Templates/NavPanel"

function Dashboard() {
  return (
    <>
      <div id="container__fullwrapper" className="dashboard">
        <div id="sidebar">
          <div className="container__logo sidebar__logo_container">
            <img src="/src/assets/images/logo.png" className="sidebar-logo" alt="Logo" />
          </div>
          <nav id="nav__sidebar">
            <NavPanel setActive={"home"} />
          </nav>
        </div>
        <div id="header">
          <div className="container__row-fullwidth">
            <div className="container__logo wcmovil">
              <img src="./src/assets/images/logo.png" alt="Logo" />
            </div>
            <div className="container__right">
              <a href="" className="user wcfullpc">
                el correo que va 1<span className="wcicon">expand_more</span>
                <ul className="sub-menu">
                  <li>el correo que va 2</li>
                  <li>
                    <form>
                      <button className="wcbtn btn-simple">
                        <span className="wcicon outlined">edit </span>
                        Mi perfil
                      </button>
                    </form>
                  </li>
                  <li>
                    <form>
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
          <div id="dashboard__container__content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
