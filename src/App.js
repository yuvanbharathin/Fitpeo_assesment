import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/shared/Layout";
import Dashboard from "./Component/Dashboard";
import Product from "./Component/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
