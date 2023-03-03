import {GuaranteeBanMenu, NavBar} from '../Templates/Menu';
import {useState, useEffect} from 'react';
import {MyProfile} from './UsersViews/Profile';
import {Roles} from './UsersViews/Roles';

import {RegisterGuarantee} from './GuaranteeViews/RegisterGuarantee';
import {SearchGuarantee} from './GuaranteeViews/SearchGuarantee';

export function GuaranteeView(){

    const [windowActive, SetWindowActive] = useState("");

    useEffect(() => {
        SetWindowActive('register_guarantee');
    }, []);

    const user = localStorage.getItem('user');
    if(user !== null){
    return (
        <>
            <div id="container__fullwrapper" className="dashboard">
                <div id="sidebar">
                    <div className="container__logo">
                        <img src="./src/assets/images/logo.png" alt="Logo" />
                    </div>
                    <nav id="nav__sidebar">
                        <NavBar />
                        <li>
                            
                        </li>
                        <hr />
                        <li>
                            
                        </li>
                    </nav>
                </div>
                <div id="header">
                    <div className="container__row-fullwidth">
                        <div className="container__logo wcmovil">
                            <img src="./src/assets/images/logo.png" alt="Logo" />
                        </div>
                        <div className="container__right">
                            <a href="" className='user wcfullpc'>
                                {user}
                                <span className="wcicon">expand_more</span>
                                <ul className="sub-menu">
                                    <li>{user}</li>
                                    <li>
                                        
                                    </li>
                                    <li>
                                        
                                    </li>
                                </ul>
                            </a>
                            <a href="" className='nav__menu-movil wcmovil'><span className="wcicon">menu</span></a>
                        </div>
                    </div>
                </div>
                <div id="main__wrapper" className='dashboard'>
                    <div id="container__content">
                        <div id="container__content-search">

                        </div>
                        <div id="container__content-content">
                            <GuaranteeBanMenu SetWindowActive={SetWindowActive}/>
                            {windowActive === "register_guarantee" ? <RegisterGuarantee/>  : <></>}
                            {windowActive === "search_guarantee" ? <SearchGuarantee/> : <></>}
                            {windowActive === "files_guarantee" ? <p> s</p> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}else{
        window.location.replace('/login');
    }
}