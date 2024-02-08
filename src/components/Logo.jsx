import { useState } from "react";
import image from "../images/logo.png";
import mac from "../images/github.png";

const Logo = () => {
  const [change, setChange] = useState(true);

  const handleOnLogo = () => {
    setChange(!change);

    return () => alert("Github?");
  };

  return (
    <>
      {change === true ? (
        <img
          onMouseEnter={handleOnLogo}
          className="size-14"
          src={image}
          alt="logo with my head"
        />
      ) : (
        <a href="https://github.com/tolgapp" target="_blank" rel="noreferrer">
          <img
            onMouseLeave={handleOnLogo}
            src={mac}
            alt="icon with me and macbook"
            className="size-14"
          />
        </a>
      )}
    </>
  );
};

export default Logo;
