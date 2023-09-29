// import { useState } from "react";
import "./PizzaList.css";
import axios from "axios";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";

export default function PizzaList() {
  const dispatch = useDispatch();

  const pizzas = useSelector((store) => store.pizzaReducer);

  useEffect(() => {
    // Fetch pizzas from the server when the component mounts
    axios
      .get("/api/pizza")
      .then((response) => {
        dispatch({ type: "SET_PIZZAS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching pizzas:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Menu</h2>
      <hr />
      <table>
        <tbody>
          {pizzas.map((pizza, i) => (
            <PizzaListItem key={i} pizza={pizza} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
