import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import server from './Mock/Server';

server()

ReactDOM.render(<App />, document.getElementById('root'));