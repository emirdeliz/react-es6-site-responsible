import React from 'react';
import ReactDom from 'react-dom';
import Home from './screens/home';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss';

ReactDom.render(
    <Home />,
    document.getElementById('root')
);
