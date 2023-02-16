import {UserNavBar, NavBar} from '../Templates/Menu'
import {useState, useEffect} from 'react'
import {MyProfile} from './UsersViews/Profile'
import {Roles} from './UsersViews/Roles'
import {BanManagement} from './UsersViews/BanManagement'
import {UserManagement} from './UsersViews/UserManagement'

export function UserView(){
    const [windowActive, SetWindowActive] = useState("");

   
    useEffect(() => {
        SetWindowActive('profile');
    }, []);

    const user = localStorage.getItem('user');
    if(user !== null){
        return (
            <>
                <NavBar />
                <UserNavBar SetWindowActive={SetWindowActive}/>
                {windowActive === "profile" ? <MyProfile /> : <></>}
                {windowActive === "users" ? <UserManagement /> : <></>}
                {windowActive === "roles" ? <Roles /> : <></>}
                {windowActive === "ban" ? <BanManagement /> : <></>}
               
            </>
        )
    }else{
        window.location.replace('/login');
    }
   
}