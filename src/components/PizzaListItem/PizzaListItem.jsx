import React, { useState } from "react";
import { useDispatch } from "react-redux";


export default function PizzaListItem({ pizza }) {

const dispatch = useDispatch();
  const [newPizza, setNewPizza] = useState('');

  const addToCart = () => {
    //console.log('clickyclick');
    dispatch({
      type: "POST_PIZZAS",
      payload: newPizza
      
    });
 
  }
  
  return (
    <div>
      <ul>
        <img src={pizza.image_path} />
        <br />
        <br />
        <hr />

        <ul>Pizza: {pizza.name}</ul>
        <br />
        <ul>Price: {pizza.price}</ul>
        <br />
        <ul>Description: {pizza.description}</ul>
      </ul>
      <br />
      <button onClick={addToCart}setNewPizza={setNewPizza} >Add to Cart</button>
      <br />
      <br />
    </div>
  );
}
