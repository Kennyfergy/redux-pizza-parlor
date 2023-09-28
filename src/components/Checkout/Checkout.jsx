import { useSelector } from "react-redux";
// import CheckoutListItem from "../CheckoutListItem/CheckoutListItem";
import "./Checkout.css";

// maybe a get request from database to access the line_items data/cart data
export default function Checkout() {
    const cart = useSelector((store) => store.customerReducer)

    return (
        <table className="cart-table">
      <thead>
        <tr>
          <th>Change Me</th>
          <th>Change Me</th>
        </tr>
      </thead>
      <tbody>
          {/* {cart.map((item, i) => {
            return <CheckoutListItem key={item.id} item={item} />
            })} */}
      </tbody>
    </table>
    );
}