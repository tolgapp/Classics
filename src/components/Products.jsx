
const Products = () => {


  return (
    <>
      <div href="#" className="group relative block">
        <div className="relative h-[350px] sm:h-[450px] ">
          <img
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="rounded-2xl absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <a
            href="https://zalando.de"
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
