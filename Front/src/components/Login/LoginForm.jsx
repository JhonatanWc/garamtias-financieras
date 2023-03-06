import {useState, useContext} from 'react'
import {getApiUrl} from '../../context/ApiContext'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

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
        })
        .then((getResponse) => {
          
        //   console.log(getResponse.data);
            const persons = getResponse.data;
            SetLoginResponse(persons);
            // console.log(LoginResponse);
           
            if(persons.status == 200){
                localStorage.setItem('token', LoginResponse.token);
                localStorage.setItem('user', UserLogin);            
                localStorage.setItem('csrfToken', LoginResponse.csrfToken); 
                navigate("/home");
           }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: persons.message,
               
            })
           }
        })

        
    }

    

    const user = localStorage.getItem('user');
    if(user === null || user === undefined ){
    return(
        <>
            <div id="main__wrapper" className='login'>
                <div className="container__row">
                    <form onSubmit={SubmitLoginForm}>
                        <div className="container__logo">
                            <img src="./src/assets/images/logo.png" alt="Logo" />
                        </div>
                        <div className='wcrow'>
                            <div className="wccol-sm-12 wccol-md12">
                                <label>Correo electrónico</label>
                                <input type="text" placeholder='Correo electrónico' onChange={(e) => {SetUserLogin(e.target.value)}} value={UserLogin}/>
                            </div>
                        </div>
                        <div className='wcrow'>
                            <div className="wccol-sm-12 wccol-md12">
                                <label>Contraseña</label>
                                <input type="password" placeholder='Contraseña' onChange={(e) => {SetUserPassword(e.target.value)}} value={UserPassword}/>
                            </div>
                        </div>
                        <button className='wcbtn btn-primary btn-lg btn-block'>Iniciar sesión</button>
                    </form>
                </div>
            </div>  
        </>
    );}else{
         window.location.replace('/home');
       
    } 
    
}