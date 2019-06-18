import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./containers/Hello";
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { EnthusiasmAction } from './actions/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';

import 'index.sass';

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root")
);