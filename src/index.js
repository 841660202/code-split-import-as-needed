import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import App from "./code-split/example/components/App";
import RouterCodeSplit from "./code-split/example/router";

ReactDOM.render(<RouterCodeSplit />, document.getElementById('root'));
registerServiceWorker();
