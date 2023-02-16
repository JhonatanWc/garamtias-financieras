import {useState, useContext} from 'react'
import {getApiUrl} from '../../context/ApiContext'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function FormLogin(){


    const {createLoginSession} = useContext(AuthContext)   
   

    const navigate = useNavigate();
    const [UserLogin, SetUserLogin] = useState("")
    const [UserPassword, SetUserPassword] = useState("")
    const [LoginResponse, SetLoginResponse] = useState("");
    const [csrfToken, setCsrfToken] = useState('');

    
    const urlLogin = getApiUrl()+"/v1/login";


    const SubmitLoginForm = (e) => {
        e.preventDefault()
        axios.get(urlLogin, {
            params: {
                'user_login': UserLogin,
                'user_password': UserPassword,
            }
          }).then(res => {
            const persons = res.data;
            SetLoginResponse(persons);
            console.log(LoginResponse);
            
            if(LoginResponse.status == 200){
                localStorage.setItem('token', LoginResponse.token);
                localStorage.setItem('user', UserLogin);            
                localStorage.setItem('csrfToken', LoginResponse.csrfToken); 
                navigate("/dashboard");
           }else{
                alert(LoginResponse.message);
           }
        })
    }

    

    const user = localStorage.getItem('user');
    if(user === null || user === undefined ){
    return(
        <>
           
            <form onSubmit={SubmitLoginForm}>
                <div>
                    <div><label>Email login </label></div>
                    <div><input type="text" placeholder='Correo de inicio de session' onChange={(e) => {SetUserLogin(e.target.value)}} value={UserLogin}/></div>
                </div>
                <div>
                    <div><label>Contraseña</label></div>
                    <div><input type="password" placeholder='contraseña de inicio de session' onChange={(e) => {SetUserPassword(e.target.value)}} value={UserPassword}/></div>
                </div>
                <button>iniciar seccion</button>
            </form>
        </>
    );}else{
         window.location.replace('/dashboard');
       
    } 
    
}