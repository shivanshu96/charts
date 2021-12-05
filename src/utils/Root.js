import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose,applyMiddleware } from 'redux';
import reducers from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware);

const Root =  ({ children}) => {
  
  const store = createStore(
    reducers,
    compose(middlewares)
  );
  sagaMiddleware.run(rootSaga);
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
