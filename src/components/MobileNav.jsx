import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const MobileNav = ({ mobile, darkMode, toggleDark }) => {
  return (
    <div className="flex flex-col items-center justify-center transition-shadow duration-700 ease-in-out text-white text-lg mt-8 sm:hidden  ">
      <p
        onClick={mobile}
        className="absolute animate-pulse right-5 w-10 top-5 "
      >
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
      <DarkMode darkMode={darkMode} toggleDark={toggleDark} />
    </div>
  );
};
export default MobileNav;
