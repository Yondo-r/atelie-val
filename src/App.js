import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import Cabecalho from './Componentes/Cabecalho'
import Inicio from'./Componentes/Inicio'
import Contato from './Componentes/Contato'
import Portifolio from './Componentes/Portifolio'
import Rodape from './Componentes/Rodape'
import Servicos from './Componentes/Servicos'
import KitsDeBercoM from './Componentes/KitsDeBercoM'
import Admin from './Admin/Admin';
import Login from './Admin/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path='/contato' component={Contato} />
          <Route path='/portifolio' component={Portifolio} />
          <Route path='/kitsdebercom' component={KitsDeBercoM} />

          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Rodape />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
