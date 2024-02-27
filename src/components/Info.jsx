/* eslint-disable react/no-unescaped-entities */
import data from "../assets/techNews.json";
import { Link } from "react-router-dom";


const Info = () => {
  
  return (
    <div className="flex mb-4 w-full flex-nowrap overflow-x-scroll scrollbar-hide pl-0 pr-0">
      {data.map((elt) => {
        return (
          <div
            key={elt.id}
            className="flex flex-col w-full sticky border border-gray-800 rounded-lg bg-gray-950 dark:border-gray-700 mb-5 mr-4"
          >
            <Link to={'/home'}>
              <img
                className="rounded-t-lg size-80 h-40"
                src={elt.image}
                alt="product image"
              />
            </Link>
            <div className="px-1 mt-4 pb-2">
              <Link to={elt.id}>
                <h5 className="mb-3 w-64 text-3xl font-semibold tracking-tight text-white">
                  {elt.text}
                </h5>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
