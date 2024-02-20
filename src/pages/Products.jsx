import Navbar from "../components/Navbar";
import data from "../assets/info.json";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {data.map((elt) => {
          return (
            <ProductItem
              key={elt.id}
              product={elt.product}
              image={elt.image}
              price={elt.price}
              id={elt.id}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Products;
