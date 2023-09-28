import React from "react";
import { useSelector } from "react-redux";
import AdminListItem from "../AdminListItem/AdminListItem";

export default function Admin() {
  const orderList = useSelector((store) => store.orderListReducer);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time Order Placed</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order) => {
          return (<ArtistListItem key={order.id} order={order} />
          );
        })}
      </tbody>
    </table>
  );
}
