"use client";
import { useState } from "react";

export default function NewItem() {

    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [category, setCategory] = useState("produce");

  

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => { 
        setCategory(event.target.value);
    }
    
    return (
       
        
        <div>
            <form item onAddItem={handleAddItem} >

                <label>
                    <span>Name:</span>
                    <input type="text"value={name}onChange={handleNameChange} required/>
                </label>
                
                <label>
                    <span>Quantity:</span>
                    <input type="number"min="1" max="99"value={quantity}onChange={handleQuantityChange}required/>
                </label>

                <label>
                    <span>Category:</span>
                    <select value={category} onChange={handleCategoryChange} required>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                    </select>
                </label>

                <button type="submit">
                    Add Item
                </button>
            </form>
        </div>

    );
};