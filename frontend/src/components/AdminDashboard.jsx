import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h3>Order ID: {order._id}</h3>
            <p>Status: {order.status}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;