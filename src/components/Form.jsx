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
        <form className="flex flex-col justify-center items-center mt-20 w-full">
          {data.exampleData.map((elt) => {
            return (
              <input
                key={elt.id}
                type={elt.type}
                name={elt.name}
                placeholder={elt.name}
                className="p-2 my-1.5 rounded-lg w-1/2 focus:ring focus:ring-teal-600 outline-none font-mono"
              />
            );
          })}
          <textarea
            placeholder="Your message"
            className="p-2 font-mono my-1.5 rounded-lg resize-none w-1/2 focus:ring  focus:ring-teal-600 outline-none"
            rows="9"
            cols={20}
          />
          <button
            className="w-1/2 p-2 rounded-lg my-1.5 bg-teal-700 font-mono hover:bg-teal-500"
            type="submit"
          >
            Send
          </button>
        </form>
      ) : (
        <>
          <h1 className="font-sans font-semibold text-8xl mb-14 break-words">
            You need more information about a product or have a order that goes
            above over 10K? Let&apos;s ..
          </h1>
          <button
            className="w-1/2 p-2 rounded-lg bg-teal-700 font-mono hover:bg-teal-500"
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
