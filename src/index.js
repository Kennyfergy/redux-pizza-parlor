import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger"; 


const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PIZZAS":
            return action.payload;
            console.log('pizzaReducer: action payload',action.payload);
        default:
            return state;
    }
}
const orderListReducer = (state = [], action) => {
    switch (action.type) {
        case "POST_PIZZAS":
            return //return what?
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        //add reducers here
        pizzaReducer,
        orderListReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</ Provider>
, document.getElementById('root'));
