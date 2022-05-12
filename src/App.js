import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Pages/Products/Products";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" exact element={<Home />} />
        <Route  path="/products" exact element={<Products />} />
        <Route  path="/products/:id" exact element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
