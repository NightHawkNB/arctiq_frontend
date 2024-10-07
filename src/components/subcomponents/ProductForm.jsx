import ProductList from "./ProductListMini.jsx";
import {useState} from "react";
import {Input} from "@nextui-org/react";


function ProductForm({products, setProducts}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        console.log(name, price, image)
        if (name && price && image) {
            setProducts([...products, {name, price, image, quantity}]);
            setName('');
            setPrice('');
            setImage('');
            setQuantity('');
        } else {
            alert("Fill all product details fields")
        }
    }

    return (
        <div className="col-span-2 pt-6">
            <ProductList products={products}/>

            <h1 className="text-2xl font-bold mb-4">Add Product</h1>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium">Product Name</label>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full rounded"
                        placeholder="Enter product name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Quantity</label>
                    <Input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        className="w-full rounded"
                        placeholder="Number of products"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Product Price</label>
                    <Input
                        type="number"
                        name="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="w-full rounded"
                        placeholder="Enter product price"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Product Image</label>
                    <Input
                        type="file"
                        name="image"
                        onChange={e => setImage(e.target.files[0].name)}
                        className="w-full rounded"
                    />
                </div>

                <button
                    type="submit"
                    onClick={handleClick}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition col-span-2"
                >
                    Add Product
                </button>
            </div>
        </div>
    );
}

export default ProductForm;