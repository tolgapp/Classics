import { useState } from "react";

const Form = () => {
  const data = {
    exampleData: [
      {
        id: 1,
        name: "Firstname",
        type: "text",
      },
      {
        id: 2,
        name: "Email",
        type: "email",
      },
      {
        id: 3,
        name: "Subject",
        type: "text",
      },
    ],
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      {click ? (
        <div>
          <div className="hidden"> Message 1</div>
          <div className="hidden"> Message 2</div>
          <form className="flex flex-col justify-center items-center mt-12 w-full md:mt-20">
            {data.exampleData.map((elt) => {
              return (
                <input
                  key={elt.id}
                  type={elt.type}
                  name={elt.name}
                  placeholder={elt.name}
                  required
                  className="w-5/6 p-2 my-1.5 rounded-lg focus:ring focus:ring-teal-600 outline-none font-mono md:w-1/2 "
                />
              );
            })}
            <textarea
              placeholder="Your message"
              className="p-2 font-mono my-1.5 rounded-lg resize-none w-5/6 focus:ring  focus:ring-teal-600 outline-none md:w-1/2"
              rows="9"
              cols={20}
            />
            <button
              className="w-5/6 p-2 rounded-lg my-1.5 bg-teal-700 font-mono hover:bg-teal-500 md:w-1/2"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="hidden">Message 3</div>
          <div className="hidden">Message 4</div>
        </div>
      ) : (
        <>
          <h1 className="rounded-lg font-sans font-semibold text-4xl mb-14 mt-14 break-words bg-gradient-to-r from-teal-400 to-teal-800 text-transparent bg-clip-text p-2 md:text-9xl">
            <span className="text-slate-50">You</span> need more information
            about a product or have an order that goes over 10K?{" "}
            <span className="text-slate-50">Let&apos;s ..</span>
          </h1>
          <button
            className="w-1/2 p-2 rounded-lg bg-teal-700 font-mono hover:bg-teal-500 font"
            onClick={handleClick}
          >
            Get in touch
          </button>
        </>
      )}
    </>
  );
};

export default Form;
