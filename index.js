import React from 'react';
import ReactDOM from 'react-dom/client';
import 'https://github.com/indrareddy13/Star-Wars-Planets/blob/main/index.css';
import App from 'https://github.com/indrareddy13/Star-Wars-Planets/blob/main/App.js';
import reportWebVitals from 'https://github.com/indrareddy13/Star-Wars-Planets/blob/main/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
