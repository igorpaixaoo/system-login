import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Redirecionando from "./pages/Redirecionando"
import CadastroSucesso from './pages/CadastroSucesso';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/recuperar-senha" component={EsqueceuSenha} />
        <Route path="/redirecionando" component={Redirecionando} />
        <Route path="/cadastro-sucesso" component={CadastroSucesso} />
      </Switch>
    </Router>
  )
}

export default App;