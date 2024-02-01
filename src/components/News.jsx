import { useEffect, useState } from "react";
// import data from "../assets/info.json";

const News = () => {
    
  const data = {
    exampleData: [
        {
          "id": 1,
          "product": "Macbook Pro",
          "text": "The new beast to go for Pro creators!"
        },
        {
          "id": 2,
          "product": "Satechi",
          "text": "Minimalistic Connection for your Mac. Get yours now!"
        },
        {
          "id": 3,
          "product": "iPad 2023",
          "text": "Stay connected to the world with your new iPad Pro"
        },
        {
          "id": 4,
          "product": "Beats Fit Pro",
          "text": "Beats or Beast? Change the view to the world with pro sound and feel the beat!"
        }
      ]
  };

  const [active, setActive] = useState(0);
  useEffect(() => {
    // create an interval
    const intervalId = setInterval(() => {
      // increment and modulo the active state so it never goes out of bounds.
      // Set the new active using the function form of setActive so the closure doesn't matter
      setActive((active) => (active + 1) % data.exampleData.length);
    }, 4900);
    // Clean up the effect
    return () => clearInterval(intervalId);
  });
  const currentData = data.exampleData[active];

  return (
    <div className="m-8 flex justify-center">
      <h2 className="text-teal-700">
        {currentData.product}
      </h2>
      <p className="pl-5">{currentData.text}</p>
    </div>
  );
};

export default News;
