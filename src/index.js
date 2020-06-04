import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CarsIndex from './containers/CarsIndex';
import { createStore } from 'redux'; // applyMiddleware
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Redirect
import { createBrowserHistory as history } from 'history';

const initialState = {
  cars: [
  { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
  { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
  { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
  { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ]
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
       <Switch>
         <Route path="/" component={CarsIndex} />
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
