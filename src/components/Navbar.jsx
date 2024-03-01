import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useThemeContext } from "../context/DarkMode";
import Logo from "./Logo";
import DarkMode from "./IconDarkMode";
import burger from "../images/mobileWhite.png";
import cancel from "../images/cancel.png";
import MobileNav from "./MobileNav";
import burgerDark from "../images/mobileDark.png";
import cancelDark from "../images/xDark.svg";


const Navbar = () => {
  const { dark } = useThemeContext();
  const [mobile, setMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const icon = dark ? burger : burgerDark;
  const cancelIcon = dark ? cancel : cancelDark;

  const handleMobile = () => {
    setMobile(!mobile);
  };

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
      className={`${dark ? "bg-gray-950" : "bg-white"} h-14 sticky ${visible ? "top-2" : ""} z-10 transition-colors duration-200 flex justify-between items-center mb-8 rounded-xl px-5 py-2 text-xs font-medium uppercase tracking-wider mr-4 ml-4`}
    >
      <Logo />
      {mobile ? (
        <img
          onClick={handleMobile}
          className="size-8 sm:hidden"
          src={cancelIcon}
          alt="mobile menu icon"
        />
      ) : (
        <img
          onClick={handleMobile}
          className="size-8 sm:hidden"
          src={icon}
          alt="mobile menu icon"
        />
      )}
      <div className={`hidden sm:flex justify-between items-center space-x-8 ${!dark ? "text-black" : "text-white"}`}>
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
        <nav className="fixed right-0 bottom-0 transition-all delay-100 backdrop-blur-3xl w-full rounded-t-xl h-4/6 z-30 sm:hidden">
          <MobileNav mobile={handleMobile} />
        </nav>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
