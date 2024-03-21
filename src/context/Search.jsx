import { createContext, useContext, useState } from "react";

const SearchContext = createContext("dark");

const DarkMode = ({ children }) => {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <SearchContext.Provider value={{ text, setText }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default DarkMode;
