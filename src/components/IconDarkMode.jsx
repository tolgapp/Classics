import darkIcon from "../images/toggleDark.png";
import light from "../images/toggleLight.png";
import { useThemeContext } from "../context/DarkMode";

const DarkMode = () => {
  const { dark, toggleDark } = useThemeContext();

  return (
    <>
      {dark ? (
        <img
          onClick={toggleDark}
          src={light}
          alt="light icon"
          className="size-8"
        />
      ) : (
        <img
          onClick={toggleDark}
          src={darkIcon}
          alt="darkness icon"
          className="size-8"
        />
      )}
    </>
  );
};

export default DarkMode;
