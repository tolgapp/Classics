import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { useThemeContext } from "../context/DarkMode";

const Contact = () => {
  const { dark } = useThemeContext();

  return (
    <div className={`h-full ${!dark ? "bg-slate-200" : "bg-zinc-900" }`}>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
