import { useState } from "react";

const DarkMode = () => {

const [click, setClick] = useState(false);

const toggle = () => {
    setClick(!click);
}

  return (
    <>
      {click ? <p onClick={toggle} className="md:font-mono text-slate-50 rounded-lg w-20">DAR.K</p> : <p onClick={toggle} className="md:font-mono bg-slate-50 text-black rounded-lg w-20">WHIT.E</p>}
    </>
  );
};

export default DarkMode;
