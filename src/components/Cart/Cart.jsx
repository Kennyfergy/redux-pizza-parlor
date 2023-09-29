import React from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import TotalPrice from "../TotalPrice/TotalPrice";
import axios from "axios";

export default function Cart() {
    const cart = useSelector((state) => state.cartReducer)
    const customer = useSelector((store) => store.customerReducer)

  console.log(cart);
console.log('customer',customer);
const submitOrder = () => {
  let orderObject = {
    customer_name: customer.name, 
    street_address: customer.address, 
    pizzas: cart.cart,
     total: cart.totalPrice, 
     type: customer.DeliveryMethod,
      city: customer.city,
      zip: customer.zip
    }


axios
.post("/api/order", orderObject)
.then((response) => {
  console.log("post at api/order", response);
  
})

}
  return (
    <div>
        <div className="totalPrice">
       <TotalPrice />
       </div>
    <table className="cart">
      <thead className="cart-head">
        <tr>
          <th>Pizza</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.cart.map((pizza, index) => { console.log(pizza) ;return(
          <tr key={index}>
            <td>{pizza.name}</td>
            <td>{ pizza.price}</td>
          </tr>
        )})}
      </tbody>
      
    </table>
    <div>
        <button onClick={submitOrder}>Submit</button>
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from "react";
// import "./Cart.css";
// import { useSelector } from "react-redux";
// import axios from "axios"; // Import Axios

// export default function Cart() {
//   const cart = useSelector((state) => state.cartReducer.cart) || [];

//   // Create a state variable to store the fetched data
//   const [lineItems, setLineItems] = useState([]);

//   useEffect(() => {
//     // Define a function to fetch data from your database
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/line_items"); // Replace with your API endpoint
//         setLineItems(response.data); // Update the state with the fetched data
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // Call the fetchData function when the component mounts or whenever needed
//     fetchData();
//   }, []); // Use an empty dependency array to only fetch data once when the component mounts

//   return (
//     <table className="cart">
//       <thead className="cart-head">
//         <tr>
//           <th>Pizza</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {lineItems.map((item, index) => (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }


