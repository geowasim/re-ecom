import { createContext, useState } from "react";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  displayName: null,
  setDisplayName: () => null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const value = { currentUser, setCurrentUser, displayName, setDisplayName };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
