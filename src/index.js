import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  { id: 1, name: "Valera", },
  { id: 2, name: "Alina", },
  { id: 3, name: "Yura", },
  { id: 4, name: "Vovan" }
]


const messageData = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "I'm good" },
]

const posts = [
  {id: 1, message: "Привет, как дела?", likesCount: 15  },
  {id: 2, message: "Мой первый пост", likesCount: 16  },
  
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messageData={messageData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
