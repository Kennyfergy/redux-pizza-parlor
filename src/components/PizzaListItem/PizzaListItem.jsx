import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./PizzaListItem.css";
import axios from "axios";

export default function PizzaListItem({ pizza }) {
  const dispatch = useDispatch();
  const [numberOfPizzas, setNumberOfPizzas] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    setIsAdded(true);

    const orderData = {
      // order_id: "FROM CUSTOMER INFORMATION",
      
      pizza_id: pizza.id,
      quantity: numberOfPizzas,
      total: pizza.price,
      pizzas: [{id: pizza.id, quantity: 1}]
    };
    //console.log('clickyclick');
    // dispatch({
    //   type: "POST_PIZZAS",
    //   payload: { newPizza, price },
    // });

    axios
      .post("/api/order", orderData)
      .then(() => {
        dispatch({
          type: "ADD_PIZZA_TO_CART",
          payload: pizza,
        });
        dispatch({
          type: "UPDATE_TOTAL_PRICE",
          payload: pizza.price,
        });
      })
      .catch((error) => {
        console.error("Error adding pizza to order:", error);
      });
  };
  ////need an axios to save the add to cart items to database so they refresh and it persists, **line items table in database

  const removeFromCart = () => {
    setIsAdded(false);
    dispatch({
      type: "REMOVE_PIZZA_FROM_CART",
      payload: pizza.id,
    });
  };

  return (
    <tr>
      <td>
        <img src={pizza.image_path} alt="Pizza Image" />
      </td>
      <td>
        <table id="menu">
          <thead>
            <tr>
              <th>Pizza</th>
              <th>Price</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody id="menu-body">
            <tr>
              <td>{pizza.name}</td>
              <td>{pizza.price}</td>
              <td>{pizza.description}</td>
              <td>
                <input
                  type="number"
                  value={numberOfPizzas}
                  onChange={(e) => setNumberOfPizzas(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              
            </tr>
          </tbody>
        </table>
        {isAdded ? (
          <button onClick={removeFromCart}>Remove from Cart</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </td>
    </tr>
  );
}
