import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import Tips from "./pages/Tips";
import Contact from "./pages/Contact";
import ProductDetail from "./components/ProductDetail";
import { Navbar } from "flowbite-react";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/tips" element={<Tips />}/>
        <Route path="/tips/:id" element={<Tips />}/>
      </Routes>
    </>
  );
}

export default App;
