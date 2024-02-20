import { useParams } from "react-router-dom";
import data from "../assets/info.json";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetail = () => {
  const idParams = useParams();

  const detailProduct = data.filter((product) => {
    return product.product.toString() === idParams.id;
  });

  console.log(detailProduct);

  return (
    <>
      <Navbar />
      <div className="bg-black rounded-xl flex flex-col justify-center place-items-center">
        <img
          className="object-contain w-96"
          src={detailProduct[0].image}
          alt={detailProduct[0].product}
        />
        <h1 className="text-5xl font-sans mb-12 mt-12">
          {detailProduct[0].product}
        </h1>
        <p className="text-2xl pl-8 pr-8 text-left">
          {detailProduct[0].detailedInfo}
        </p>
        <p className="text-2xl pl-8 pr-8 text-left pt-6 pb-12">
          {detailProduct[0].detailedInfo2}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
