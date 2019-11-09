import React from 'react';
import ReactDOM from 'react-dom';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App';
import Footer from './containers/Footer'
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter as Router } from 'react-router-dom'

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
