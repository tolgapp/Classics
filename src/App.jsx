import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loader />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
