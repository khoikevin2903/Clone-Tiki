import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBqy8UfCrmYUIr3YlY2dQGOpkdFhdiuYYg",
	authDomain: "clonetiki-30c27.firebaseapp.com",
	databaseURL: "https://clonetiki-30c27.firebaseio.com",
	storageBucket: "clonetiki-30c27.appspot.com"
  };
firebase.initializeApp(config);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

