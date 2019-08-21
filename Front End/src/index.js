import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Login, Register } from "./components/login/index";
import { StudentDashboard } from "./components/dashboard/studentDashboard";
import { CourseDashboard } from "./components/dashboard/courseDashboard";
import { MainForm } from "./components/courseForm/mainForm"
import  Tutorial  from "./components/details/tutorial"
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/form" component={MainForm} />
        <Route path="/dashboard" component={CourseDashboard} />
        <Route path="/course/:id" component={Tutorial} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
