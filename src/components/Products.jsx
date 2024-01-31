const Products = () => {
  return (
    <>
      <div href="#" className="group relative block">
        <div className="relative h-[350px] sm:h-[450px] ">
          <img
            src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />

          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
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
          
          <a
            href="https://www.apple.com/de/macbook-pro/"
            className="rounded-xl mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
