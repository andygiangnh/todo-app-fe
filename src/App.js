import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import TodoMain from './pages/TodoMain';
import ProtectedRoute from './auth/ProtectedRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navigation from './component/Navigation';
import Register from './pages/RegisterPage';
import Home from './component/Home';

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/app" component={TodoMain} />
            <Route path="*" component={() => "404 NOT found"} />
          </Switch>  
        </div>
      </>
    )
  }
}
