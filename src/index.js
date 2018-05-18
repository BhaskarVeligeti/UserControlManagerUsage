import React from 'react';
import ReactDOM from 'react-dom';
import { RouteHandler } from './router';
import registerServiceWorker from './registerServiceWorker';

 // from parent
    // css
 import "./styles/fm.css";  
    // js
import '../node_modules/@spillay/formmanager/node_modules/bootstrap/dist/js/bootstrap'; // This line will only import the js part of bootstrap. 
import '../node_modules/@spillay/formmanager/node_modules/bootstrap-select/js/bootstrap-select' // This line will only import the js part of bootstrap-select.
import '../node_modules/@spillay/formmanager/node_modules/react-dates/lib/css/_datepicker.css'
import '../node_modules/@spillay/formmanager/node_modules/react-dates/initialize';



ReactDOM.render(<RouteHandler />, document.getElementById('root'));
registerServiceWorker();
