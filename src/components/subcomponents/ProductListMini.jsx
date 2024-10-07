function ProductList ({ products }) {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Added Products</h2>
            {products.length > 0 ? (
                <ul className="space-y-4">
                    {products.map((product, index) => (
                        <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
                            <div>
                                <p className="font-medium text-gray-900">Product Name: {product.name}</p>
                                <p className="text-sm text-gray-500">Price: LKR {product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-white">No products added yet.</p>
            )}
        </div>
    )
}

export default ProductList