import { useSelector } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
import "./Checkout.css";

export default function Checkout() {
  const cart = useSelector((store) => store.customerReducer);
  console.log("Customer Data:", cart);

  return (
    <div>
      <h2>Order Details:</h2>
      <hr />
      <table className="cart-table">
        <thead>
          <tr>
            <th id="th">Name</th>
            <th id="th">Address</th>
            <th id="th">City</th>
            <th id="th">Zip Code</th>
            <th id="th">Delivery Method</th>
          </tr>
        </thead>
        {/* <tbody>
      {cart.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.zip}</td>
              <td>{customer.DeliveryMethod}</td>
            </tr>
          ))} */}
        <CheckoutListItem />
        {/* </tbody> */}
      </table>
    </div>
  );
}
