import React from 'react';

export default function OrderDetails({ orders }) {
  // Calculate subtotal and total amount
  const subtotal = orders.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const total = subtotal + 5; // Assuming $5 for shipping
  
  return (
    <div className="order-box max-w-lg mx-auto bg-white rounded-xl overflow-hidden text-center">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Order</h2>
        <ul className="mt-5">
          {orders.map((order, index) => (
            <li key={index} className="flex justify-between py-1">
              <span className="text-gray-600">{order.name} x {order.quantity}</span>
              <span className="text-gray-800">${order.price * order.quantity}</span>
            </li>
          ))}
        </ul>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800">${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-800">$5</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">${total}</span>
        </div>
        <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Checkout</button>
      </div>
    </div>
  );
}
