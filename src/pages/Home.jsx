import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import News from "../components/News";



// TODO: Dark / Light Theme (for now just the background)
// TODO: Customer Service Card with Image and some info on Home 
// TODO: Icons on the background @nav if hovered on the page links

// FIXME: Wechsel auf Products "Springeffekt" fixen


const Home = () => {
  return (
    <div>
      <Navbar />
      <News />
      <Info />
      <Highlight />
      <Footer />
    </div>
  );
};

export default Home;
