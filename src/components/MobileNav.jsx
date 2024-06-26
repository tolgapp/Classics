import { Link } from "react-router-dom";
import DarkMode from "./IconDarkMode";
import { useThemeContext } from "../context/DarkMode";

const MobileNav = ({ mobile }) => {

  const { dark } = useThemeContext();

  return (
    <div className={`flex flex-col items-center justify-center ${!dark ? "text-black" : "text-white"} text-lg mt-8 sm:hidden  `}>
      <p onClick={mobile} className="absolute right-5 w-10 top-5 ">
        X
      </p>
      <Link className="hover:text-teal-700 hover:underline p-4" to={"/home"}>
        Home
      </Link>
      <Link
        className="hover:text-teal-700 hover:underline p-4"
        to={"/products"}
      >
        Products
      </Link>
      <Link className="hover:text-teal-700 hover:underline p-4" to={"/tips"}>
        Tipps
      </Link>
      <Link className="hover:text-teal-700 hover:underline p-4" to={"/contact"}>
        Contact
      </Link>
      <DarkMode />
    </div>
  );
};
export default MobileNav;
