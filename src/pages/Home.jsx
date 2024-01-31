import Products from "../components/Products";
import Navbar from "../components/Navbar";
import News from "../components/News";


// TODO: Scrollbar + (buttons to the left / right) with more Products (Air, Airpods, Beats and iPad and Satechi)
// TODO: Changing the News Comp every 5-6s (Nike also uses React with packages onSlideBlur or onSlideFocus)
// TODO: Dark / Light Theme (for now just the background)

const Home = () => {
  return (
    <div>
      <Navbar />
      <News />
      <Products />
    </div>
  );
};

export default Home;
