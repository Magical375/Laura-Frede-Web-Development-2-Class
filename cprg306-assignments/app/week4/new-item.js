"use client";

import { useState } from "react";

export default function newItem() {
    const [name, setName] = useState("");
    /*const [quantity, setQuantity] = parseString(quantity, setQuantity);
    [quantity, setQuantity] = useState("1");*/
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
  
  useState("1");
    const submitFunction = (event) => {
        event.preventDefault();
        // Handle form data
    
    const newItem = {
        name,
        quantity,
        category,
    };
    console.log(newItem);

    setItemCreated(true);

    setName("");
    setQuantity("1");
    setCategory("produce");

    setItemCreated(false);
    };  

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    
    const handleCategoryChange = (event) => {   
        setCategory(event.target.value);
    };

    return(       
        <main>
            {itemCreated && <p>Item created!</p>}
        <h1>Create New Item</h1>

        <form onSubmit="submitFunction(event)">
        Enter the item name: <input type="text" required onChange={setName}  value={name}/>
        Enter the quantity of the item: <input type="number" min={1} max={99} required onChange={setQuantity}  value={quantity}/>
        Enter the category of the item: <input type="text" required onChange={setCategory}  value={category}/>  
       
        <button type="submit">Create Item</button>
        </form>
        
        <NewItem/>
        </main>
            );
          }
