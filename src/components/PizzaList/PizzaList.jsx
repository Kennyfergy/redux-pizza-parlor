// import { useState } from "react";
import "./PizzaList.css";

import { useSelector } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";

export default function PizzaList() {
  const pizzas = useSelector((store) => store.pizzaReducer);

  return (
    <tbody>
      <h2>Menu</h2>
      <hr />
      <tr className="item">
        {pizzas.map((pizza, i) => (
          <PizzaListItem key={i} pizza={pizza} />
        ))}
      </tr>
    </tbody>
  );
}
