/* eslint-disable react/no-unescaped-entities */
import data from "../assets/techNews.json";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/DarkMode";

const Info = () => {
  const { dark } = useThemeContext();

  return (
    <div
      className={`flex mb-4 w-full flex-nowrap overflow-x-scroll scrollbar-hide ${dark ? "bg-slate-200" : "bg-zinc-900"}`}
    >
      {data.map((elt) => {
        return (
          <div
            key={elt.id}
            className={`flex flex-col w-full sticky border  rounded-t-lg rounded-b-lg mb-5 mr-4 ${dark ? "bg-white" : "bg-zinc-900"}`}
          >
            <Link to={"/home"}>
              <img
                className="rounded-t-lg size-80 h-40"
                src={elt.image}
                alt="product image"
              />
            </Link>
            <div
              className={`px-1 pt-3 pb-2 rounded-b-lg	 ${dark ? "bg-white" : "bg-black"}`}
            >
              <Link to={elt.id}>
                <h5
                  className={`${dark ? "text-black" : "text-white"} mb-3 w-64 text-3xl font-semibold tracking-tight`}
                >
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
