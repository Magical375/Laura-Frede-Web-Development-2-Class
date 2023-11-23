"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.trim(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };
  
    // Check if the user is not logged in and redirect to the landing page
    useEffect(() => {
      if (!user) {
        router.push("/week8/page"); // Replace with your landing page URL
      }
    }, [user]);

  return (
    <div className="flex">
      <div className="w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
       </div>
        <div className="w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}     
        </div>
    </div>
  );
};

export default Page;