import { Link } from "react-router-dom";

const Highlight = () => {
  return (
    <>
      <div href="#" className="group relative block mr-4 ml-4">
        <div className="relative h-[450px] sm:h-[550px] ">
          <img
            src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="macbook pro 2023"
            className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />

          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="macbook"
            className=" rounded-2xl absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Apple Macbook Pro 2023</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Fast. Faster. M3 Max.
          </p>
          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            All Day Long Battery for MAX Production.
          </p>
          
          <Link
            to={"/tips"}
            className="rounded-xl mt-3 inline-block bg-stone-600 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-teal-600"
          >
            More info
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlight;
