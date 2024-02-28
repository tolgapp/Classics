import { Link } from "react-router-dom";
import { useThemeContext } from "../context/DarkMode";

const FooterData = ({ header, data }) => {

  const { dark } = useThemeContext();

  return (
    <div className={`${!dark ? "bg-gray-950" : "bg-white"} flex flex-col items-center w-full p-10 rounded-t-xl`}>
      <h3 className="font-mono text-teal-500 p-2 ">
        {header}
      </h3>
      {data.map((elt) => {
        return (
          <section key={elt.id} className="flex flex-col">
            <Link
              to={"/home"}
              target=""
              rel="noreferrer"
              className="mt-4 hover:underline hover:text-neutral-400"
            >
              {elt.text}
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default FooterData;


