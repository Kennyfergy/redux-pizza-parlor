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
const orderListReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ORDERS":
            return action.payload;
        default:
            return state;
    }
}

const cartReducer = (state = { cart: [], totalPrice: 0 }, action) => {
    switch (action.type) {
      case "ADD_PIZZA_TO_CART":
        return {
          cart: [...state.cart, action.payload],
          totalPrice: state.totalPrice + Number(action.payload.price),
        };
      case "REMOVE_PIZZA_FROM_CART":
        const pizzaToRemove = state.cart.find(
          (pizza) => pizza.id === action.payload.pizza.id
        );
        return {
          cart: state.cart.filter((pizza) => pizza.id !== action.payload.pizza.id),
          totalPrice: state.totalPrice - Number(pizzaToRemove.price),
        };
      default:
        return state;
    }
  };
  


const customerReducer = (state = {}, action ) => {
    switch (action.type){
        case "UPDATE_CUSTOMER":
        return action.payload;
        default:
            return state;
}
}


const initialState = null;

// const orderDetailsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CLEAR_ORDER_DETAILS:
//             return initialState;
//         default:
//             return state;
//     }
// };

const store = createStore(
    combineReducers({
        //add reducers here
        pizzaReducer,
        orderListReducer,
        customerReducer,
        cartReducer,
        // orderDetailsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</ Provider>
, document.getElementById('root'));
