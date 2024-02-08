import github from "../../public/images/github.png";
import FooterPartner from "./FooterData";
import FooterContact from "./FooterData";
import data from "../assets/footerPartner.json";
import help from "../assets/footerHelp.json";

const Footer = () => {
  return (
    <div className="flex flex-col mt-14 rounded-t-xl md:flex-row md:mt-20  text-white  bg-gray-950">
      <div className="hidden md:flex flex-col justify-center w-full">
        <a className="flex items-center" href="https://tolgapp.de">
          <img className="ml-8 size-10" src={github} alt="" />
          <h5 className=" font-mono">Tolgapp</h5>
        </a>
        <p className="flex ml-10 font-mono">©2024</p>
      </div>
      <FooterPartner data={data} header={"Partnership"} />
      <FooterContact data={help} header={"Help & Information"} />
      <div className="flex flex-col justify-center w-full md:hidden">
        <a className="flex justify-center items-center mt-8" href="https://tolgapp.de">
          <img className="size-10" src={github} alt="" />
          <h5 className=" font-mono">Tolgapp</h5>
        </a>
        <p className="flex justify-center mb-6 font-mono">© 2024</p>
      </div>
    </div>
  );
};

export default Footer;