"use client";
import ItemList from './item-list.js';
import itemData from './items.json';
import NewItem from './new-item.js';

function Page({ id, name, quantity, category}) {
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


    return (
        <main>

<NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        

            <ItemList/>
            <NewItem/>

        </main>
    );
}

export default Page;