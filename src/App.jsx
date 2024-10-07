import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Supplier_Form from "./components/Supplier_Form.jsx";
import Navbar from "./components/Navbar.jsx";
import SupplierList from "./components/SupplierList.jsx";
import SupplierSearch from "./components/SupplierSearch.jsx";
import ProductsList from "./components/ProductsList.jsx";

// List of all the routes in the application
const routes = [
    {path: '/create-supplier', element: <Supplier_Form />},
    {path: '/view-suppliers', element: <SupplierList />},
    {path: '/view-products', element: <ProductsList />},
    {path: '/search-supplier', element: <SupplierSearch />},
];

const generateRoutes = () => {
  return routes.map((route, index) => {
      return (
          <Route key={index} path={route.path} element={route.element} />
      );
  });
};

function App() {
  return (
    <div className="bg-gray-200">
      <Router>
          <Navbar/>
          <Routes>
              {generateRoutes()}
          </Routes>
      </Router>
    </div>
  )
}

export default App
