import footerData from "../assets/footerData.json";

const Footer = () => {
  return (
    <div className="mt-36 flex flex-col items-center w-32">
        <h3 className="font-mono text-stone-100 bg-zinc-950 p-2 rounded-lg ">Partnerships</h3>
      {footerData.map((elt) => {
        return (
          <section key={elt.id} className="flex flex-col justify-items-start">
            <a href="https://tolgapp.de" target="_blank" rel="noreferrer" className="mt-4 hover:underline hover:text-neutral-400">{elt.text}</a>
          </section>
        );
      })}
    </div>
  );
};

export default Footer;
