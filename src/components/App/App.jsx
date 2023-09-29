import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList";
// import TotalPrice from "../TotalPrice/TotalPrice";
import PizzaForm from "../PizzaForm/PizzaForm";
import Checkout from "../Checkout/Checkout";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faClipboardList,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPizzas();
  }, []);
  // GET axios w/ function
  const getPizzas = () => {
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: "SET_PIZZAS", payload: response.data });
      })
      .catch((error) => {
        console.log("Error in getting pizza list", error);
      });
  };

  //GET for order list
  /* const getOrders = () = {
    axios
    .get("/api/order")
    .then((response) => {
      dispatch({ type: "FETCH_ORDERS", payload: response.data})
    })
    .catch((error) => {
      console.log("Error in getting pizza list", error)
    });
  };
    
  */ 

  // POST axios w/ function
  const postPizzas = () => {
    axios
      .post("/api/pizza") //need to post to pizzaList??
      .then((response) => {
        dispatch({
          type: "POST_PIZZAS",
          payload: {
            pizza: pizza.name,
            price: pizza.price,
          }
        });
      })
      .catch((err) => {
        console.log("Error in Posting pizzas", err);
      });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <div className ='nav' >
          <ul>
            <Link className="link" to="/">
              <FontAwesomeIcon icon={faHome} /> Menu
            </Link>
          </ul>
          <ul>
            <Link className="link" to="/form">
              <FontAwesomeIcon icon={faClipboardList} /> Order Form
            </Link>
          </ul>
          <ul>
            <Link to="/checkout">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Link>
          </ul>
        </div>
        <hr />
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <PizzaForm />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
