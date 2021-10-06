import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reducer, { initialState } from './reactContext/Reducer';
import { StateProvider } from './reactContext/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);