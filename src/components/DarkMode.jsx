import dark from "../images/toggleDark.png";
import light from "../images/toggleLight.png";

const DarkMode = ({ darkMode, toggleDark }) => {
  return (
    <>
      {!darkMode ? (
        <img
          onClick={toggleDark}
          src={light}
          alt="light icon"
          className="size-8"
        />
      ) : (
        <img
          onClick={toggleDark}
          src={dark}
          alt="darkness icon"
          className="size-8"
        />
      )}
    </>
  );
};

export default DarkMode;
