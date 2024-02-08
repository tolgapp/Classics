import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import News from "../components/News";

// TODO: Dark / Light Theme (for now just the background)

const Home = () => {

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
