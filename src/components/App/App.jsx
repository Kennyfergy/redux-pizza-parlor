import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList";
// import TotalPrice from "../TotalPrice/TotalPrice";
import PizzaForm from "../PizzaForm/PizzaForm";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";

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
  // POST axios w/ function
  const postPizzas = () => {
    axios
      .post("/api/pizza") //need to post to pizzaList??
      .then((response) => {
        dispatch({
          type: "POST_PIZZAS",
          payload: something.something,
        }); /* need from handlesubmit??*/
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
        <ul>
          <Link to="/">Menu</Link>
        </ul>
        <ul>
          <Link to="/form">Order</Link>
        </ul>
        <ul>
          <Link to="/checkout">Checkout</Link>
        </ul>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <PizzaForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
