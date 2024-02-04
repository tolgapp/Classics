import { Link } from "react-router-dom";
import Logo from "./Logo";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-8 rounded-xl bg-black px-5 py-2 text-xs font-medium uppercase tracking-wider text-white z-10">
      <Logo />
      <div className="flex justify-around space-x-8 text-zinc-50  ">
        <Link className="hover:text-teal-700 hover:underline" to={"/home"}>
          Home
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/products"}>
          Products
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/tipps"}>
          Tipps
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/contact"}>
          Contact
        </Link>
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
