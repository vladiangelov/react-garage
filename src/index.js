import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarsIndex from './containers/CarsIndex';
import CarShow from './containers/CarShow';
import CarForm from './containers/CarForm';
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
        <div className="view-container">
         <Switch>
           <Route path="/" exact component={CarsIndex} />
           <Route path="/cars/new" component={CarForm} />
           <Route path="/cars/:car" component={CarShow} />
         </Switch>
        </div>
     </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
