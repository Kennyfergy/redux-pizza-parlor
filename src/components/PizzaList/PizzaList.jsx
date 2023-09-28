// import { useState } from "react";
// import "./PizzaList.css";
import { useSelector } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";


export default function PizzaList() {
  const pizzas = useSelector((store) => store.pizzaReducer);

  return (
    <div className="pizzas">
      <h2>Menu</h2>
      <hr />
      <ul>
        {pizzas.map((pizza, i) => (
          <PizzaListItem key={i} pizza={pizza}/>
        ))}
      </ul>
    </div>
  );
}
