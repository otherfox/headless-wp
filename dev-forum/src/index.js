import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Settings from './services/api/settings';
import Methods from './services/api/methods';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
