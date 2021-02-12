import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById(‘root’));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
