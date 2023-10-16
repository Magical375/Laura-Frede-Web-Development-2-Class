"use client";

import { useState } from "react";

const [name, setName] = useState("");
const [quantity, setQuantity] = useState("1");
const [category, setCategory] = useState("produce");
const submitFunction = (event) => {
    event.preventDefault();
    // Handle form data
  };


export default function NewItem() {
    return(       
        <main>
        
        <form onSubmit="submitFunction(event)">
          <input type="text" name="name" placeholder="Enter the item name" />
          <input type="number" name="quantity" placeholder="Enter the quantity of the item" />
          <input type="text" name="category" placeholder="Enter the category of the item" />
          <button type="submit">Submit</button>
        </form>
        
        <NewItem/>
        </main>
            );
          }
