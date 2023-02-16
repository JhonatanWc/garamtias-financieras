import {GuaranteeBanMenu, NavBar} from '../Templates/Menu'
import {useState, useEffect} from 'react'
import {RegisterGuarantee} from './GuaranteeViews/RegisterGuarantee'

export function GuaranteeView(){

    const [windowActive, SetWindowActive] = useState("");

    useEffect(() => {
        SetWindowActive('register_guarantee');
    }, []);

    const user = localStorage.getItem('user');
    if(user !== null){
    return (
        <>
            <NavBar/>
            <GuaranteeBanMenu/>
            {windowActive === "register_guarantee" ? <RegisterGuarantee/>  : <></>}
            {windowActive === "search_guarantee" ? <p></p> : <></>}
            {windowActive === "files_guarantee" ? <p></p> : <></>}
            


        </>
    )}else{
        window.location.replace('/login');
    }
}