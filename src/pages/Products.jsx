import Navbar from "../components/Navbar";
import data from "../assets/info.json";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { useThemeContext } from "../context/DarkMode";
import { useSearchContext } from "../context/Search";
import News from "../components/News";

const Products = () => {
  const { dark } = useThemeContext();
  const { text } = useSearchContext();

  const filteredProduct = data.filter((elt) => {
    const nameLower = elt.product.toLowerCase();
    const textLower = text.toLowerCase();
    return nameLower.includes(textLower);
  });

  return (
    <div className={`${!dark ? "bg-slate-200" : "bg-zinc-900"}`}>
      <Navbar />
      <News />
      <div className="flex flex-wrap justify-center mt-4 mr-3 ml-3">
        {filteredProduct.map((elt) => {
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
