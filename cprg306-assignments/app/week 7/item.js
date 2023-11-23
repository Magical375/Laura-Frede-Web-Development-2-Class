import React from "react";

const Item = ({ name, quantity, category, onSelect}) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <div className="text-2xl border border-yellow-200  bg-pink-100 font-bold text-gray-400 w-full max-w-xs m-4 p-2"
    onClick={handleClick} // Add onClick handler to make the item clickable
    >
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;