import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Card";
import Footer from "./Footer";
import "./document.css";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
   <div className= "App">
   <div className="document container">
      <Card />
      <Footer />
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
