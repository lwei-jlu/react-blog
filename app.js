import React from 'react'
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import reducer from './src/reducers'
import { Provider } from 'react-redux';
import RouterMap from './src/router';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={ store }>
        <RouterMap />
    </Provider> ,
    document.getElementById('root')
);
