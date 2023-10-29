import React from 'react';

export default function Item({ name, quantity, category }) {
    return (
      <li className="border border-black bg-gray-800 mb-4 py-4 px-8 rounded">
        <strong className="font-bold">{name}</strong>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </li>
    );
  };
