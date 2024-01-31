import Navbar from "../components/Navbar";
import data from "../assets/info.json";
import { useEffect, useState } from "react";

const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(data);
  }, [item]);

  console.log(item);

  return (
    <div>
      <Navbar />
      <div>
        {item.map((elt) => {
          return (
            <div key={elt.id} className="group relative block mt-8">
              <div className="relative h-[350px] sm:h-[450px]">
                {elt.image2 ? <img src={elt.image} alt={elt.product} className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-100"/> : <img src={elt.image} alt={elt.product} className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-100"/>}
                {elt.image2 ? (
                  <img
                    src={elt.image2}
                    alt={elt.product}
                    className=" rounded-2xl absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h2 className="rounded-xl mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  {elt.product}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
