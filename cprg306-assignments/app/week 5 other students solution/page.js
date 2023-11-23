import Link from 'next/link.js';
import ItemList from './item-list.js';

function Page() {
    return (
        <main className="bg-gray-900 mb-4 py-4 px-8 rounded">
            <Link className="font-bold" href="/">Home</Link>
            <h1>Shopping List</h1>
            <ItemList/>
        </main>
    );
}

export default Page;