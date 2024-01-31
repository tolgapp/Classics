import image from "../images/logo.png";

const Logo = () => {
  return (
    <>
      <a href="https://github.com/tolgapp" target="_blank" rel="noreferrer">
        <img className="size-14" src={image} alt="logo with my head" />
      </a>
    </>
  );
};

export default Logo;
