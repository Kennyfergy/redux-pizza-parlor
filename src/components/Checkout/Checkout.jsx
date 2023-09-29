import { useSelector } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
import Cart from "../Cart/Cart";
import "./Checkout.css";

export default function Checkout() {
  const cart = useSelector((store) => store.customerReducer);
  console.log("Customer Data:", cart);

  return (
    <div>
      <h2>Order Details:</h2>
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
        <CheckoutListItem />
      </table>
      <br />
      <br />
      <hr />
      <br />
      <h2>Cart:</h2>
      <br />
      <Cart />
    </div>
  );
}
