import FooterPartner from "./FooterData";
import FooterContact from "./FooterData";
import data from "../assets/footerPartner.json";
import help from "../assets/footerHelp.json";

const Footer = () => {
  return (
    <>
      <FooterPartner data={data} header={"Partnership"} />
      <FooterContact data={help} header={"Help & Information"} />
    </>
  );
};

export default Footer;
