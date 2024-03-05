import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useThemeContext } from "../context/DarkMode";
import macbook from "/images/m3pro.png";
import { useEffect, useState } from "react";

const Tips = () => {
  const { dark } = useThemeContext();

  const [scrollPos, setScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    const currentScroll = window.scrollY;
    if (currentScroll < scrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrollPos(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);

    return () => window.removeEventListener("scroll", handleVisibility);
  }, [visible]);

  return (
    <div className={`${!dark ? "bg-slate-200" : "bg-zinc-900"}`}>
      <Navbar />
      <section
        className={`${!dark ? "bg-white" : "bg-black"} rounded-xl pb-12 mt-14 mr-4 ml-4`}
      >
        <h1
          className={`header-tips ${visible ? "visible" : "invisible"} font-sans font-semibold pt-10 pr-8 pl-8 text-4xl break-words bg-gradient-to-r from-gray-900 to-gray-500 tracking-wide text-transparent bg-clip-text p-2  md:text-9xl`}
        >
          If you can imagine it! You can create it with Macbook Pro.
        </h1>
        {dark ? (
          <img
            src="https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large_2x.jpg"
            alt=""
          />
        ) : (
          <img src={macbook} alt="macbook pro m3" />
        )}
        <h2 className="text-3xl text-left p-8 text-sky-500">
          Developers & Power Users
        </h2>
        <p
          className={`${!dark ? "text-black" : "text-stone-250"} text-xl pl-8 pr-8 text-left `}
        >
          If your work involves software development, large-scale data
          processing, or running multiple virtual machines, the M3 Max
          configurations with higher memory (up to 48GB) would be the most
          beneficial. The increased memory and processing power will
          significantly enhance performance in development environments and
          data-intensive tasks.
        </p>
        <h2 className="text-3xl text-left p-8 text-sky-500">
          Creative Professionals:
        </h2>
        <p
          className={`${!dark ? "text-black" : "text-stone-250"} text-xl pl-8 pr-8 text-left `}
        >
          For those in graphic design, video editing, 3D rendering, or music
          production, the higher configurations of the M3 Pro or the M3 Max are
          worth considering. The M3 Pro’s 12-core CPU and 18-core GPU option,
          for example, provide ample power for demanding creative software,
          while the M3 Max’s superior GPU and CPU performance are ideal for
          high-end video editing and complex visual effects work.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Tips;
