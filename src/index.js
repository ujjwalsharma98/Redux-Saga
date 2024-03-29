import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { watchAge } from './store/sagas/saga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run( watchAge );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

