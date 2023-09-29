import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./PizzaListItem.css";
import axios from "axios";

export default function PizzaListItem({ pizza }) {
  const dispatch = useDispatch();
  const [numberOfPizzas, setNumberOfPizzas] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  //console.log(typeof pizza.price)

//   const addToCart = () => {
//     setIsAdded(true);
// dispatch({ type: "ADD_PIZZA_TO_CART", payload: { pizza: {id: pizza.id, quantity: numberOfPizzas}, price: (Number(pizza.price) * numberOfPizzas) } })
   
//   };
// Action to add a pizza to the cart
const addPizzaToCart = (pizza) => ({
    type: "ADD_PIZZA_TO_CART",
    payload: {id: pizza.id, name:pizza.name, quantity: numberOfPizzas, price: (Number(pizza.price) * numberOfPizzas)} 
    //   name: pizza.name, // Include the entire pizza object
    //   price: (Number(pizza.price) * numberOfPizzas),
    //   quantity: numberOfPizzas,   
    // },
    
  });

const addToCart = () => {
    setIsAdded(true);

    const pizzaToAdd = {
      ...pizza // Include the entire pizza object
    };

    dispatch(addPizzaToCart(pizzaToAdd));
    // ...
  };


  const removeFromCart = () => {
    setIsAdded(false);
    dispatch({
      type: "REMOVE_PIZZA_FROM_CART",
      payload: { pizza: {id: pizza.id, quantity: numberOfPizzas}, price: (Number(pizza.price) * numberOfPizzas) }
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
                  id="pizzaQ"
                  type="number"
                  value={numberOfPizzas}
                  onChange={(e) => setNumberOfPizzas(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                {isAdded ? (
                  <button onClick={removeFromCart}>Remove from Cart</button>
                ) : (
                  <div className="addBtn">
                    <button className="add-cart" onClick={addToCart}>
                      Add to Cart
                    </button>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
