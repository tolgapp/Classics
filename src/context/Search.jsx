import { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

const DarkMode = ({ children }) => {
  const [text, setText] = useState("");

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
