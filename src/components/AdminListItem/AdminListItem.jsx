import React from "react";
import { useState } from "react";

export default function AdminListItem({ order }) {
  const [fullOrder, setFullOrder] = useState(null)
  return (
    <>
    {fullOrder !== order.id ? (
      
    <tr onClick={() => setFullOrder(order.id)}>
      <td>{order.customer_name}</td>
      <td>{order.time}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
      <td>Click for more details</td>
    </tr>) : (<tr onClick={() => setFullOrder(null)}>
    <td>{order.customer_name}</td>
    <td>{order.street_address}</td>
    <td>{order.city}</td>
    <td>{order.zip}</td>
    <td>{order.time}</td>
    <td>{order.type}</td>
    <td>{order.total}</td>
    <td>Click to Collapse</td>
    </tr>
      
      )}
      </>
  );
}
