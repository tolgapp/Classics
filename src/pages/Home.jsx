import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import News from "../components/News";


// TODO: Scrollbar + (buttons to the left / right) with more Products (Air, Airpods, Beats and iPad and Satechi)
// TODO: Dark / Light Theme (for now just the background)
// TODO: More Content on Home 

// TODO: Icons on the background @nav if hovered on the page links

// FIXME: Wechsel auf Products "Springeffekt" fixen
// FIXME: (Info.jsx) X Scroll and the width of the components (should be wider and the fifth should shown only if scrolled )



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
