import React from 'react'
import ReactDom from 'react-dom';
import App from './src/components/app';
import { createStore } from 'redux';
import reducer from './src/reducers'
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider> ,
    document.getElementById('root')
);
