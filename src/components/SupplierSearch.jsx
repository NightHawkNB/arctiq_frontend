import { useState } from 'react';
import axios from 'axios';
import {Button, Input} from "@nextui-org/react";
import Supplier from "./subcomponents/Supplier.jsx";

const SupplierSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            await axios.get(`http://127.0.0.1:8000/api/suppliers/search`, {
                params: { query }
            })
                .then(response => {
                    setResults(response.data)
                })
                .catch(error => {
                    console.error(error)
                    alert("An error occurred. Please try again")
                })
        } catch (error) {
            console.error("Error fetching search results:", error);
            alert("An error occurred. Please try again")
        }
    };

    return (
        <div className="px-6 py-4 flex flex-col gap-4 bg-blue-300">
            <div className="flex justify-between gap-2">
                <Input
                    type="text"
                    placeholder="Search by name or mobile number"
                    value={query}
                    className="rounded-sm"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleSearch} color="primary">Search</Button>
            </div>
            <h1 className="text-lg font-semibold pt-4">Results</h1>
            <hr/>

            <div>
                {results.length > 0 ? (
                    <ul className="flex flex-col gap-2">
                        {results.map(supplier => (
                            <Supplier key={supplier.id} supplier={supplier} />
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SupplierSearch;