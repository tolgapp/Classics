import github from "../assets/images/github.png";
import FooterPartner from "./FooterData";
import FooterContact from "./FooterData";
import data from "../assets/footerPartner.json";
import help from "../assets/footerHelp.json";

const Footer = () => {
  return (
    <div className="flex">
      <div className="mt-36 flex flex-col justify-center w-full bg-black">
        <a className="flex items-center" href="">
          <img className="ml-8 size-10" src={github} alt="" />
          <h5 className=" font-mono">Tolgapp</h5>
        </a>
        <p className="flex ml-10 font-mono">©2024</p>
      </div>
      <FooterPartner data={data} header={"Partnership"} />
      <FooterContact data={help} header={"Help & Information"} />
    </div>
  );
};

export default Footer;
