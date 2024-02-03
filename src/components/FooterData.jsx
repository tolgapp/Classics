const FooterData = ({ header, data }) => {
  return (
    <div className="mt-36 flex flex-col items-center w-full bg-black">
      <h3 className="font-mono text-stone-100 bg-zinc-950 p-2 rounded-lg ">
        {header}
      </h3>
      {data.map((elt) => {
        return (
          <section key={elt.id} className="flex flex-col justify-items-start">
            <a
              href="https://tolgapp.de"
              target="_blank"
              rel="noreferrer"
              className="mt-4 hover:underline hover:text-neutral-400"
            >
              {elt.text}
            </a>
          </section>
        );
      })}
    </div>
  );
};

export default FooterData;


