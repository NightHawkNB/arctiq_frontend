function Supplier ({ supplier }) {
    return (
        <li className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
            <div>
                <p className="font-medium text-gray-900">Product Name: {supplier.name}</p>
                <p className="text-sm text-gray-500">Price: LKR {supplier.mobile}</p>
            </div>
        </li>
    )
}

export default Supplier