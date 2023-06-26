import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state,addPost) =>{
  root.render(
    <React.StrictMode>
      
      <App state = {state} addPost={addPost} />
    </React.StrictMode>
  );
}

export default rerenderEntireTree;


