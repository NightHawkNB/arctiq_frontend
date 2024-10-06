import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const routes = [
  { path: '/create-supplier', element: <h1>Create Supplier Form</h1> },
  { path: '/home', element: <h1>Home</h1> },
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
          {/* <Navigation /> */}
          <h1>Navbar</h1>
          <Routes>
              {generateRoutes()}
          </Routes>
      </Router>
    </div>
  )
}

export default App
