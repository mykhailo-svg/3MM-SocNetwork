
import reportWebVitals from './reportWebVitals';

import {subscribe} from './state';

import store from './state';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () =>{
  root.render(
    <React.StrictMode>
      
      <App state = {store.getState()} addPost={store.addPost.bind(store)} />
    </React.StrictMode>
  );
}


rerenderEntireTree();



subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

