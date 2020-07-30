import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
