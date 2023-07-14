
import reportWebVitals from './reportWebVitals';

import { subscribe } from './redux/redux-store';

import store from './redux/redux-store';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import StoreContext, { Provider } from './store-context';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>


      <App dispatch={store.dispatch.bind(store)} />

    </Provider>
  </React.StrictMode>
);







// store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

