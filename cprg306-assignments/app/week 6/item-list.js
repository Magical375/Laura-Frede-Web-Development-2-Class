import { useState } from "react";
import Item from "./item.js";
import itemData from "./items.json";

export default function items({items}) {
    const [sortBy, setSortBy] = useState("name");
    const [items, setItems] = useState(itemData);
    const handleAddItem = (event) => {
        event.preventDefault();
        const newItem = {
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            category: event.target.category.value,
        };
        setItems([...items, newItem]);
      };

   

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
    });

    const handleSortByName = () => {
        setSortBy("name");
    };

    const handleSortByCategory = () => {
        setSortBy("category");
    };

    return (
        <div>
            <div>

                {items}
                <button onClick={handleSortByName}>
                    Sort by Name
                </button>

                <button onClick={handleSortByCategory}>
                    Sort by Category
                </button>

            </div>

            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>

        </div>
    );
};

