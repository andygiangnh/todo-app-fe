import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoMain from './TodoMain';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = { LoginPage } />
        <Route exact path="/app" component={ TodoMain } />
        <Route path="*" component={() => "404 NOT found"} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
