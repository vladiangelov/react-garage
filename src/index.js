import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarsIndex from './containers/CarsIndex';
import CarShow from './components/CarShow';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Redirect
import { createBrowserHistory as history } from 'history';

const middlewares = applyMiddleware(reduxPromise);

const initialState = {
  cars: []
};

const store = createStore(rootReducer, initialState, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
       <Switch>
         <Route path="/" exact component={CarsIndex} />
         <Route path="/cars/:car" component={CarShow} />
       </Switch>
     </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
