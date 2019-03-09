import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { saveItem } from './services/localStorage';
import './assets/css/material-dashboard-react.css';

store.subscribe(() => {
  saveItem('TOKEN', store.getState().token.token);
});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React, { include: [/^DeviceSelector/] });
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
