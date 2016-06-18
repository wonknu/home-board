import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
// import Stream from './components/Stream';
import Meteo from './components/Meteo';
import Train from './components/Train';
import thunk from 'redux-thunk'

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
// store.dispatch(actions.setTracks(tracks));

store.dispatch(actions.setWeather())
.then(() => {
  // console.log('Done!');
});

store.dispatch(actions.setTrain())
.then(() => {
  // console.log('Done!');
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Meteo} />
        <Route path="/meteo" component={Meteo} />
        <Route path="/train" component={Train} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
