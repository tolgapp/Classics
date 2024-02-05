import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import burger from "../assets/images/mobileWhite.png";
import cancel from "../assets/images/cancel.png";
import MobileNav from "./MobileNav";
// import mobileDark from "../assets/images/mobileDark.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
    console.log(!mobile);
  };

  return (
    <div className="z-10 md:static flex justify-between items-center mb-8 rounded-xl bg-gray-950 px-5 py-2 text-xs font-medium uppercase tracking-wider text-white">
      <Logo />
      {mobile ? (
        <img
          onClick={handleMobile}
          className="size-8 md:hidden"
          src={cancel}
          alt="mobile menu icon"
        />
      ) : (
        <img
          onClick={handleMobile}
          className="size-8 md:hidden"
          src={burger}
          alt="mobile menu icon"
        />
      )}
      <div className="hidden md:flex justify-around space-x-8 text-zinc-50 ">
        <Link className="hover:text-teal-700 hover:underline" to={"/home"}>
          Home
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/products"}>
          Products
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/tips"}>
          Tipps
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/contact"}>
          Contact
        </Link>
        <DarkMode />
      </div>
      {mobile ? (
        <div className="fixed bottom-0 backdrop-blur-2xl w-full border dark:border-gray-700  rounded-t-xl left-0 h-4/6 z-30 md:hidden">
          <MobileNav mobile={handleMobile} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
