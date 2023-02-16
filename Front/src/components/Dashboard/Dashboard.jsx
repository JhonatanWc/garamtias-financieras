import {AuthContext} from '../../context/AuthContext'
import {useState, useContext} from 'react'
import {getApiUrl} from '../../context/ApiContext'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {NavBar} from '../Templates/Menu'


export function Dashboard(){
    
    const navigate = useNavigate();
    const {loginData} = useContext(AuthContext)   


    const token = localStorage.getItem('token');
    const csrfToken = localStorage.getItem('csrfToken'); 

    const urlMyProfile = getApiUrl()+"/v1/myProfile";
    const urlLogout = getApiUrl()+"/v1/logout";
    
    const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    };
    
    const data = {
        'data': "data"
    }
    
   

    async function SubmitMyProfile(e) {
        e.preventDefault()
        // console.log(token)
        axios.get(urlMyProfile, {
                headers: headers 
            }
          )
          .then(res => {
            const info = res.data;
            console.log(info);
        }).catch(error => {
            console.error(error);
        });

       
    }

    async function SubmitLogout(e){
        e.preventDefault()
        axios.post(urlLogout,data,{
            headers:headers
        }).then(res => {
            console.log(res.data)
            localStorage.clear();
            navigate("/login");
        }).catch(error =>{
            console.log(error)
        });
    }
   
    const user = localStorage.getItem('user');
    if(user !== null && user !== undefined){
        return (
            <>            
                <h1>Bienvenido {user}</h1>
                <NavBar />
                <form onSubmit={SubmitMyProfile}>
                    <button>Mi perfil</button>
                </form>
                
                <form onSubmit={SubmitLogout}>
                    <button>Cerrar cession</button>
                </form>
            </>
        )
    }else{
        window.location.replace('/login');
    }
    
}