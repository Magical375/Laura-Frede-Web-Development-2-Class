import { useState } from "react";
import React from "react";
import Item from "./item";
import itemsData from "./items.json";
import NewItem from "./new-item";

export default function ItemList({onItemSelect }) {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");


    const handleSortByName = () => {
      setSortBy("name");
      sortItems("name");
  };

  const handleSortByCategory = () => {
      setSortBy("category");
      sortItems("category");
  };

  const sortItems = (sortType) => {
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (a[sortType] < b[sortType]) {
        return -1;
      }
      if (a[sortType] > b[sortType]) {
        return 1;
      }
      return 0;
    });
    setItems(sortedItems);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const cleanItemName = (itemName) => {
    const cleanedName = itemName.split(",")[0].trim();
    return cleanedName.replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ""
    );
  };

  const itemComponents = items.map((item) => (
    <Item
      key={item.id}
      name={cleanItemName(item.name)}
      quantity={item.quantity}
      category={item.category}
      onSelect={() => onItemSelect(item)}
    />
  ));

      return (
        <>
        <div className="grid gap-2 max-w-xs m-4 p-2">
        <label>Sort by:</label>
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === 'name' ? 'lightgreen' : 'pink' }}
        >
        Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortBy === 'category' ? 'lightgreen' : 'pink' }}
        >
        Sort by Category
        </button>
              {itemComponents}
      </div>
  
      
      </>
        
      );
  };