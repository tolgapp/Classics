import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Tips = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-950 rounded-xl pb-12">
        <h1 className="font-sans font-semibold text-4xl mb-14 mt-14 break-words bg-gradient-to-r from-gray-900 to-gray-500 text-transparent bg-clip-text p-2 md:text-9xl">
          If you can imagine it! You can create it with the Macbook Pro.
        </h1>
        <img
          src="https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large_2x.jpg"
          alt=""
        />
        <h2 className="text-3xl text-left p-8 text-sky-500">Developers & Power Users</h2>
        <p className="text-xl pl-8 pr-8 text-left text-stone-300">
          If your work involves software development, large-scale data
          processing, or running multiple virtual machines, the M3 Max
          configurations with higher memory (up to 48GB) would be the most
          beneficial. The increased memory and processing power will
          significantly enhance performance in development environments and
          data-intensive tasks.
        </p>
        <h2 className="text-3xl text-left p-8 text-sky-500">Creative Professionals:</h2>
        <p className="text-xl pl-8 pr-8 text-left text-stone-300">For those in graphic design, video editing, 3D rendering, or music production, the higher configurations of the M3 Pro or the M3 Max are worth considering. The M3 Pro’s 12-core CPU and 18-core GPU option, for example, provide ample power for demanding creative software, while the M3 Max’s superior GPU and CPU performance are ideal for high-end video editing and complex visual effects work.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Tips;
