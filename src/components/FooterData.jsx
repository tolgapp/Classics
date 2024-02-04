const FooterData = ({ header, data }) => {
  return (
    <div className="mt-36 flex flex-col items-center w-full bg-black p-10 ">
      <h3 className="font-mono text-teal-900 p-2 ">
        {header}
      </h3>
      {data.map((elt) => {
        return (
          <section key={elt.id} className="flex flex-col">
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


