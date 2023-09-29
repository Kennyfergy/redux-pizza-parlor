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
        default:
            return state;
    }
}
// const orderListReducer = (state = [], action) => {
//     switch (action.type) {
//         case "POST_PIZZAS":
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }
//kenny just brought this in
const cartReducer = (state = { cart: [], totalPrice: 0 }, action) => {
    switch (action.type) {
      case "ADD_PIZZA_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalPrice: state.totalPrice + Number(action.payload.price),
        };
      case "REMOVE_PIZZA_FROM_CART":
        const pizzaToRemove = state.cart.find(
          (pizza) => pizza.id === action.payload
        );
        return {
          ...state,
          cart: state.cart.filter((pizza) => pizza.id !== action.payload),
          totalPrice: state.totalPrice - Number(pizzaToRemove.price),
        };
      default:
        return state;
    }
  };
  


const customerReducer = (state = [], action ) => {
    switch (action.type){
        case "UPDATE_CUSTOMER":
        return [...state, action.payload];
        default:
            return state;
}
}

const store = createStore(
    combineReducers({
        //add reducers here
        pizzaReducer,
        // orderListReducer,
        customerReducer,
        cartReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</ Provider>
, document.getElementById('root'));
