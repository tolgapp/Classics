import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-8 rounded-xl bg-black px-5 py-3 text-xs font-medium uppercase tracking-wider text-white z-10">
      <Logo />
      <div className="flex justify-around space-x-8 text-zinc-50  ">
        <Link className="hover:text-teal-700 hover:underline" to={"/home"}>Home</Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/products"}>Products</Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/contact"}>Contact</Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/tipps"}>Tipps</Link>
      </div>
    </div>
  );
};

export default Navbar;
