

function SupplierDetails({supplier}) {
  return (
      <div className="flex justify-between items-center bg-blue-800/60 py-4 px-6 hover:bg-blue-800 hover:text-white rounded">
          <div className="flex flex-col">
              <span className="text-gray-900 font-medium">{supplier.name}</span>
              <span className="text-white text-sm">Contact: {supplier.contact}</span>
          </div>
          <div className="flex items-center">
              <span className="text-white text-sm">Mobile: {supplier.mobile}</span>
          </div>
      </div>
  );
}

export default SupplierDetails;