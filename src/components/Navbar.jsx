import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import burger from "../images/mobileWhite.png";
import cancel from "../images/cancel.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
    console.log(!mobile);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`bg-gray-950 h-14 sticky ${visible ? "top-2" : ""} z-10 transition-colors duration-200 bg-gray-950 text-white flex justify-between items-center mb-8 rounded-xl px-5 py-2 text-xs font-medium uppercase tracking-wider mr-4 ml-4`}
    >
      <Logo />
      {mobile ? (
        <img
          onClick={handleMobile}
          className="size-8 sm:hidden"
          src={cancel}
          alt="mobile menu icon"
        />
      ) : (
        <img
          onClick={handleMobile}
          className="size-8 sm:hidden"
          src={burger}
          alt="mobile menu icon"
        />
      )}
      <div className="hidden sm:flex justify-between items-center space-x-8 text-white">
        <Link className="hover:text-teal-700 hover:underline" to={"/home"}>
          Home
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/products"}>
          Products
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/tips"}>
          Tips
        </Link>
        <Link className="hover:text-teal-700 hover:underline" to={"/contact"}>
          Contact
        </Link>
        <DarkMode />
      </div>
      {mobile ? (
        <nav className="fixed bottom-0 transition-all delay-150 backdrop-blur-3xl w-full  rounded-t-xl left-0 h-4/6 z-30 sm:hidden">
          <MobileNav
            mobile={handleMobile}
            // darkMode={darkMode}
            // toggleDark={toggleDark}
          />
        </nav>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
