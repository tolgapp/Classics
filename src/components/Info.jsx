/* eslint-disable react/no-unescaped-entities */
import data from "../assets/techNews.json";
import { Link } from "react-router-dom";


const Info = () => {
  return (
    <div className="flex mb-4 w-full flex-nowrap overflow-x-scroll scrollbar-hide">
      {data.map((elt) => {
        return (
          <div
            key={elt.id}
            className="flex flex-col w-full sticky border rounded-lg bg-gray-950 dark:border-gray-700 mb-5 mr-4"
          >
            <a href="">
              <img
                className="rounded-t-lg size-80 h-40"
                src={elt.image}
                alt="product image"
              />
            </a>
            <div className="px-1 mt-4 pb-2">
              <Link to={elt.id}>
                <h5 className="mb-3 w-64 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
