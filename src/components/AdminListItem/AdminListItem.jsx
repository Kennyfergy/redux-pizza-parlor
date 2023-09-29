import React from "react";

export default function AdminListItem({ order }) {
  return (
    <tr>
      <td>{order.customer_name}</td>
      <td>{order.time}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
    </tr>
  );
}
