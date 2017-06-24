/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-24 14:08:53 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-24 14:08:53 
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

var store = createStore(reducer);
ReactDom.render( <Provider store = { store }><App/></Provider>, document.getElementById('root'));