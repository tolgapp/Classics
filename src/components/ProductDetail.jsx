import { useParams } from "react-router-dom";
import data from "../assets/info.json";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetail = () => {
  const idParams = useParams();
  console.log(idParams)
  const detailProduct = data.filter((product) => {
    return product.id.toString() === idParams.id;
  });

  console.log(detailProduct);

  return (
    <>
    <Navbar />
    <div className="bg-black rounded-xl flex flex-col justify-center place-items-center">
      <img className="object-contain w-96" src={detailProduct[0].image} alt={detailProduct[0].product} />
      <h1 className="text-5xl font-sans mb-12">{detailProduct[0].product}</h1>
        
    </div>
    <Footer />
    </>
  );
};

export default ProductDetail;
