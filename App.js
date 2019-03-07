import * as React from 'react';
import RoutingFlatList from './routing/routing'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RoutingFlatList />
      </Provider>
    )
  }
}