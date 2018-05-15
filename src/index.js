import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap'; // This line will only import the js part of bootstrap. 
// import 'bootstrap-select' // This line will only import the js part of bootstrap-select.
import { RouteHandler } from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteHandler />, document.getElementById('root'));
registerServiceWorker();
