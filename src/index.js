import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, subscribe, updateNewPostText } from './Redux/state';
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    
    root.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe (rerenderEntireTree); 
reportWebVitals();
