import React from "react";
import { Link } from "react-router-dom";

import "../styles/LoginStyle.css"

function Login() {
  return (
    <div className="App">
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <input id="usuario" type="email" placeholder="Email:" />
          <input id="password" type="password" placeholder="Senha:" />
          <div className="informations">
            <Link to="recuperar-senha"><label>Esqueceu a senha?</label></Link>
          </div>
          <button class="cta">
            <Link to="/"><span class="hover-underline-animation"> entrar </span></Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>
          <div className="cadastre-se">
            <label>Não tem uma conta? <Link to="/cadastro"><span>Crie uma!</span></Link></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
