import React from "react";
import { useSelector } from "react-redux";
import AdminListItem from "../AdminListItem/AdminListItem";


export default function Admin() {
  const orderList = useSelector((store) => store.orderListReducer);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order) => {
          return (<AdminListItem key={order.id} order={order} />
          );
        })}
        <div>
      <button onClick={refreshPage}>Click to reload!</button>
    </div>
      </tbody>
    </table>
  );
}
