import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-8 ">
      <Logo />
      <div className="flex justify-around space-x-8 text-zinc-50">
        <Link to={"/home"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/tipps"}>Tipps</Link>
      </div>
    </div>
  );
};

export default Navbar;
