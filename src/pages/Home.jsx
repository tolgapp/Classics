import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import News from "../components/News";
import { useThemeContext } from "../context/DarkMode";

const Home = () => {
  const { dark } = useThemeContext();

  return (
    <div className={`${dark ? "bg-slate-200" : "bg-zinc-900" }`}>
      <Navbar  />
      <News />
      <Info />
      <Highlight />
      <Footer  />
    </div>
  );
};

export default Home;
