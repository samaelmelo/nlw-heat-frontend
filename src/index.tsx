import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { AuthProvider } from './contexts/auth';
import {Global} from "./styles/global"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <App /> 
    </AuthProvider>
    <Global/>
  </React.StrictMode>,
  document.getElementById('root')
);
