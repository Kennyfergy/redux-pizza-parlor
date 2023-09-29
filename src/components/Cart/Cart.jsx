import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import TotalPrice from "../TotalPrice/TotalPrice";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";


export default function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const customer = useSelector((store) => store.customerReducer);

  console.log(cart);
  console.log("customer", customer);

 const trackOrder = () => {
    window.open('https://www.dominos.com/en/pages/tracker/#!/track/order/', '_blank')
      
  }



  const submitOrder = () => {
    let orderObject = {
      customer_name: customer.name,
      street_address: customer.address,
      pizzas: cart.cart,
      total: cart.totalPrice,
      type: customer.DeliveryMethod,
      city: customer.city,
      zip: customer.zip,
    };

    axios.post("/api/order", orderObject).then((response) => {
      console.log("post at api/order", response);
    });
  };
  return (
    <div>
      <div className="total">
        <TotalPrice />
      </div>
      <br />
      <br />
      <table className="cart">
        <thead className="cart-head">
          <tr>
            <th>Pizza</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.cart.map((pizza, index) => {
            console.log(pizza);
            return (
              <tr key={index}>
                <td>{pizza.name}</td>
                <td>{pizza.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={submitOrder}>Submit</button>
        
      </div>
      <div>
        <button onClick={trackOrder}>Track Order</button>
      </div>
    </div>
  );
}
