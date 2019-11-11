import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Demo.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';
import Avatarlist from './Avatarlist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Avatar />, document.getElementById('root'));

serviceWorker.unregister();
