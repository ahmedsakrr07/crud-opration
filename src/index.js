import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';

import UserProvider from '../src/component/context/context';





import { BrowserRouter as Router } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
    <App />
    </UserProvider>
    </Router>
  </React.StrictMode>
  
);
