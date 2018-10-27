import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

//import App from './App';
//import Hello from './components/Hello';
//import Hello from './components/StatefulHello';
import Hello from './containers/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState,any,any,any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
  <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
