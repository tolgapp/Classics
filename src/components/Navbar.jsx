import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="navbar flex justify-around space-x-4">
        <Link to={"/home"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/tipps"}>Tipps</Link>
      </div>
    </div>
  );
};

export default Navbar;
