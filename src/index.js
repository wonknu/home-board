import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Board from './components/Board';
import Meteo from './components/Meteo';
import Train from './components/Train';
import Timer from './components/Timer';
import Clock from './components/Clock';
import Image from './components/Image';
import thunk from 'redux-thunk'

const store = configureStore();

var doStore = function () {
  store.dispatch(actions.setTimer());
  store.dispatch(actions.setWeather()).then(() => {});
  store.dispatch(actions.setTrain());
  store.dispatch(actions.setImage());
};

setInterval(doStore, (2 * 60 * 1000));
doStore();
setInterval(function () {
  store.dispatch(actions.setClock());
}, 1000);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Board} />
        <Route path="/board" component={Board} />
        <Route path="/meteo" component={Meteo} />
        <Route path="/train" component={Train} />
        <Route path="/timer" component={Timer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
