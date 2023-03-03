import {UserNavBar, NavBar} from '../Templates/Menu';
import {useState, useEffect} from 'react';
import {MyProfile} from './UsersViews/Profile';
import {Roles} from './UsersViews/Roles';

import {BanManagement} from './UsersViews/BanManagement';
import {UserManagement} from './UsersViews/UserManagement';

export function UserView(){
    const [windowActive, SetWindowActive] = useState("");
   
    useEffect(() => {
        SetWindowActive('profile');
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
                            <div id="container__content-content">
                                <UserNavBar SetWindowActive={SetWindowActive} />
                                {windowActive === "profile" ? <MyProfile /> : <></>}
                                {windowActive === "users" ? <UserManagement /> : <></>}
                                {windowActive === "roles" ? <Roles /> : <></>}
                                {windowActive === "ban" ? <BanManagement /> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }else{
        window.location.replace('/login');
    }
   
}