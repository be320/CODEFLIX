import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import { Login, Register } from "./components/login/index";
import { StudentDashboard } from "./components/dashboard/studentDashboard";
import { CourseDashboard } from "./components/dashboard/courseDashboard";
import { MainForm } from "./components/courseForm/mainForm"
import  Tutorial  from "./components/details/tutorial"
import Success from "./components/courseForm/success"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./reducers/rootReducer"


const store = createStore(rootReducer)


const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/form" component={MainForm} />
        <Route path="/dashboard" component={CourseDashboard} />
        <Route path="/course/:id" component={Tutorial} />
        <Route path="/success" component={Success} />
      </div>
    </Router>
    </Provider>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
