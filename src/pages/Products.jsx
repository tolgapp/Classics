import Navbar from "../components/Navbar";
import data from "../assets/info.json";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { useThemeContext } from "../context/DarkMode";
import News from "../components/News";

const Products = () => {

  const { dark } = useThemeContext();

  return (
    <div className={`${!dark ? "bg-slate-200" : "bg-zinc-900" }`}>
      <Navbar />
      <News />
      <div className="flex flex-wrap justify-center mt-4 mr-2 ml-2">
        {data.map((elt) => {
          return (
            <ProductItem
              key={elt.id}
              product={elt.product}
              image={elt.image}
              price={elt.price}
              id={elt.product}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
