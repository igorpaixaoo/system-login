import React from "react";

import "../styles/EsqueceuSenhaStyle.css"
import { Link } from "react-router-dom";

const EsqueceuSenha = () =>{
  return(
    <div className="App">
      <div className="container">
        <div className="esqueceu-senha">
          <h1>Recuperar senha</h1>
          <p>Para recuperar a senha digite o seu email cadastrado.</p>
          <input type="email" id="email-query" placeholder="Email: nome@exemplo.com"/>
          <input type="password" id="senha-query" placeholder="Senha nova:"/>
          <button class="cta">
            <Link to="/redirecionando"><span class="hover-underline-animation"> avançar </span></Link>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EsqueceuSenha;