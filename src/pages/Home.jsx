import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import News from "../components/News";

// TODO: Dark / Light Theme (for now just the background)
// TODO: Customer Service Card with Image and some info on Home

// FIXME: Wechsel auf Products "Springeffekt" fixen

const Home = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDark = () => {
  //   setDarkMode(!darkMode);
  //   {
  //     darkMode
  //       ? (document.body.style.backgroundColor = "#222222")
  //       : (document.body.style.backgroundColor = "#ffffff");
  //   }
  //   {
  //     darkMode && document.body.classList.toggle("dark");
  //   }
  // };

  return (
    <div>
      <Navbar  />
      <News />
      <Info />
      <Highlight />
      <Footer  />
    </div>
  );
};

export default Home;
