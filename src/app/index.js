import React from "react";
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";

import App from './components/App';
import allReducers from './reducers/index';

const store = createStore(
	allReducers,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<App/>
	</Provider>
	, window.document.getElementById('app'));