import axios from 'axios'
import {useEffect, useState} from "react";

function ProductsList() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/getAll`)
            .then(response => {
                if(response.status === 200) {
                    setProducts(response.data.content)
                } else {
                    console.error(response.data.content)
                    alert("An error occurred. Please try again")
                }
            })
    }, []);

    return (
        <div className="bg-blue-300 flex flex-col justify-center">
            <h1 className="heading">Products List</h1>

            <div className="flex flex-col gap-2 px-4 py-2">
                {products && products.map((product, index) => (
                    <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                        <div>
                            <p className="font-medium text-gray-900">Product Name: {product.name}</p>
                            <p className="text-sm text-gray-500">Price: LKR {product.price}</p>
                        </div>
                    </li>
                ))}

                {!products && <h1>No products found</h1>}
            </div>

        </div>
    );
}

export default ProductsList;