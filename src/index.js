import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  //<------This already assumes the file is JS
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
