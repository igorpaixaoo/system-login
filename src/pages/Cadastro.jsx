import React from "react";

import "../styles/CadastroStyle.css"
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="cadastro">
          <h1>Criar conta</h1>
          <div className="form">
            <input id="email-cadastro" type="email" placeholder="nome@example.com" required />
            <input id="senha-cadastro" placeholder="Criar senha" />
            <button class="cta">
              <Link to="/cadastro-sucesso"><span class="hover-underline-animation"> criar </span></Link>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro;