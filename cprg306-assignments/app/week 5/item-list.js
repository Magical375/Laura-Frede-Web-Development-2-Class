import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("All");

  sortBy = "name"; 

  if (sortBy == "name") {
    items = items.filter((item) => items.category === categoryFilter);}

  if (sortBy == "category") {
    items = items.filter((item) => item.name === nameFilter);}
    
    <div className="text-center">
        <label htmlFor="location">Sort by:</label>
        <select
          id="location"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-sky-950 text-white p-2 font-sans"
        >
          <option value="All">All</option>
          {locations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          )
          
          )}

        </select>
      </div>
  }
}