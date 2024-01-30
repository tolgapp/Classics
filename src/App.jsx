import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Loader from "./components/Loader";
import Products from "./components/Products";
import Tipps from "./pages/Tipps";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loader />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/tipps" element={<Tipps />}/>
      </Routes>
    </>
  );
}

export default App;
