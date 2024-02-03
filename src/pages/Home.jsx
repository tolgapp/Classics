import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import Navbar from "../components/Navbar";
import News from "../components/News";


// TODO: Scrollbar + (buttons to the left / right) with more Products (Air, Airpods, Beats and iPad and Satechi)
// TODO: Dark / Light Theme (for now just the background)
// TODO: More Content on Home 
// TODO: Adding more Data to the Footer Comp


const Home = () => {
  return (
    <div>
      <Navbar />
      <News />
      <Highlight />
      <Footer />
    </div>
  );
};

export default Home;
