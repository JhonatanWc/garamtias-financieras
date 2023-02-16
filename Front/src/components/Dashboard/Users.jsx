import {UserNavBar, NavBar} from '../Templates/Menu'
import {useState, useEffect} from 'react'
import {MyProfile} from './UsersViews/Profile'
import {UserManagement} from './UsersViews/UserManagement'

export function UserView(){
    const [windowActive, SetWindowActive] = useState("");

   
    useEffect(() => {
        SetWindowActive('profile');
    }, []);

    return (
        <>
            <NavBar />
            <UserNavBar SetWindowActive={SetWindowActive}/>
            {windowActive === "profile" ? <MyProfile /> : <></>}
            {windowActive === "users" ? <UserManagement /> : <></>}
            {windowActive === "roles" ? <p>roles</p> : <></>}
            {windowActive === "ban" ? <p>Bloqueos</p> : <></>}
           
        </>
    )
}