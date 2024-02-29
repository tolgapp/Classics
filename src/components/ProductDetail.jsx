import { useParams } from "react-router-dom";
import data from "../assets/info.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useThemeContext } from "../context/DarkMode";

const ProductDetail = () => {
  const idParams = useParams();
  console.log(idParams);

  const detailProduct = data.filter((product) => {
    return product.product.toString() === idParams.id;
  });

  const {dark} = useThemeContext();


  return (
    <div className={`${!dark ? "bg-slate-200" : "bg-zinc-900" }`}>
      <Navbar />
      <div className={`${!dark ? "bg-white" : "bg-gray-950"} rounded-xl flex flex-col justify-center place-items-center mr-4 ml-4`}>
        <img
          className="object-contain w-96"
          src={detailProduct[0].image}
          alt={detailProduct[0].product}
        />
        <h1 className={`${dark ? "text-white" : "text-black"}  text-5xl font-sans mb-12 mt-12`}>
          {detailProduct[0].product}
        </h1>
        <p className={`${dark ? "text-white" : "text-black"} text-2xl pl-8 pr-8 text-left`}>
          {detailProduct[0].detailedInfo}
        </p>
        <p className={`${dark ? "text-white" : "text-black"} text-2xl pl-8 pr-8 text-left pt-6 pb-14`}>
          {detailProduct[0].detailedInfo2}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
