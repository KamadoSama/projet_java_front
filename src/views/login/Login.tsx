import { useNavigate } from "react-router-dom";
import React, { useRef, useState}  from "react";
import logo from '../../assets/login.png'
import "./Login.scss";
import { Tilt } from "react-tilt";
import { Toast } from "primereact/toast";
import { api } from "../../services/api/api";
import { saveToken } from "../../services/Token/TokenStorage";
import { ILogin } from "../../services/models/models";

export const Login = () => {

  
  const toast = useRef<Toast>(null);
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin=()=>{
    const data:ILogin ={
      username:email,
      password:password
  }
  
  api.loginService(data)
  .then((res)=>{
    toast.current?.show({severity:'success', summary: 'Super', detail:'Bienvenue', life: 3000});
    console.log(res)
    if(res.data.role=="etudiant"){
      
      saveToken("users","etudiant")
      navigate('/student')
    }

    if(res.data.role=="educatrice"){
      saveToken("users","educatrice")
      navigate('/educatrice')
    }
    if(res.data.role=="admin"){
      saveToken("users","admin")
      navigate('/admin')
    }

 if(res.data.role=="enseignant"){
      saveToken("users","enseignant")
      navigate('/teacher')
    }
  })
  .catch((err)=>{
    toast.current?.show({severity:'error', summary: 'Erreur', detail:'Email ou de passe incorrect', life: 3000});
  })
  }
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div className="limiter login" >
      <Toast ref={toast} />
      <div className="container-login100">
        <div className="wrap-login100">
          <Tilt options={defaultOptions}>
            <div className="login100-pic js-tilt" data-tilt>
              <img src={logo} alt="IMG"  />
            </div>
          </Tilt>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              Système de Gestion de l'ESATIC
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="veuillez l'email"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Login"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="veuillez le mot de passe"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Mot de passe"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="button" onClick={()=>handleLogin()} className="login100-form-btn">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};