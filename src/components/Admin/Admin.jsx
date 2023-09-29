import React from "react";
import { useSelector } from "react-redux";
import AdminListItem from "../AdminListItem/AdminListItem";


export default function Admin() {
  const orderList = useSelector((store) => store.orderListReducer);

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
        
      </tbody>
    </table>
  );
}
