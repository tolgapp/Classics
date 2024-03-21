import { useEffect, useState } from "react";
import { useThemeContext } from "../context/DarkMode";

const News = () => {

  const {dark} = useThemeContext();
    
  const data = {
    exampleData: [
        {
          "id": 1,
          "product": "Macbook Pro",
          "text": "The new beast to go for Pro creators!"
        },
        {
          "id": 2,
          "product": "Anker",
          "text": "Huge power in your pocket!"
        },
        {
          "id": 3,
          "product": "iPad Pro 2024",
          "text": "Stay connected to the world with your new iPad Pro"
        },
        {
          "id": 4,
          "product": "Beats Fit Pro",
          "text": "Beats or Beast? Change the view to the world with pro sound!"
        }
      ]
  };

  const [active, setActive] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setActive((active) => (active + 1) % data.exampleData.length);
    }, 4900);

    return () => clearInterval(intervalId);
  });
  const currentData = data.exampleData[active];

  return (
    <div className="flex flex-col text-xs md:flex-row justify-center md:text-sm">
      <h2 className="text-teal-500 ">
        {currentData.product}
      </h2>
      <p className={`md:pl-5  ${dark ? "text-white" : "text-black"}`}>{currentData.text}</p>
    </div>
  );
};

export default News;
