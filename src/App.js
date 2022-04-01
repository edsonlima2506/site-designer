import React from 'react'; 
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from '../src/pages/Index';
import DesignGrafico from '../src/pages/DesingGráfico';
import Grafica from './pages/Grafica';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Index } />
          <Route exact path="/desing-grafico" component={ DesignGrafico } />
          <Route exact path="/grafica" component={ Grafica } />
          <Route exact path="/comunicacao-visual" component={ DesignGrafico } />
          <Route exact path="/uniformes" component={ DesignGrafico } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
