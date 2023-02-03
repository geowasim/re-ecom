import { createContext, useState } from "react";

const ApiData = createContext({
  currentData: null,
  setCurrentData: () => null,
});

const ApiDataProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(null);
  const value = { currentData, setCurrentData };
  return <ApiData.Provider value={value}>{children}</ApiData.Provider>;
};
