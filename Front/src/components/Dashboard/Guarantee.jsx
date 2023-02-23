import {GuaranteeBanMenu, NavBar} from '../Templates/Menu'
import {useState, useEffect} from 'react'
import {RegisterGuarantee} from './GuaranteeViews/RegisterGuarantee'
import {SearchGuarantee} from './GuaranteeViews/SearchGuarantee'

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
            <GuaranteeBanMenu SetWindowActive={SetWindowActive}/>
            {windowActive === "register_guarantee" ? <RegisterGuarantee/>  : <></>}
            {windowActive === "search_guarantee" ? <SearchGuarantee/> : <></>}
            {windowActive === "files_guarantee" ? <p> s</p> : <></>}
            


        </>
    )}else{
        window.location.replace('/login');
    }
}