import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DataStore } from '@aws-amplify/datastore';
import { Users } from './models';
// await DataStore.save(
//   new Users({
//   "username": "Lorem ipsum dolor sit amet",
//   "email": "Lorem ipsum dolor sit amet",
//   "password": "Lorem ipsum dolor sit amet",
//   "Tasks": []
// })
// );

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
