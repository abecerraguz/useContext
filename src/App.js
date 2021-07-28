import React from 'react';
import { LoginProvider } from './LoginProvider';
import Detalle from './components/Nav';
import Formulario from './components/Formulario';

function App() {

  return (
    <LoginProvider>
      <div className="App">
        <Detalle/>
        <Formulario/>
      </div>
    </LoginProvider>
  );
}

export default App;
