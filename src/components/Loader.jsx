import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loader.css";

const Loader = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 1400);
  }, [navigate]);

  return (
    <div className="flex h-screen flex-col justify-center items-center max-h-full">
      <h3 className="flex w-max font-mono content-center place-items-center ">
        Loading ...
      </h3>
      <p className="w-max font-mono content-center place-items-center text-rose-800">
        <span>Click </span> not the Logo!
      </p>
    </div>
  );
};

export default Loader;
