import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [selected, setSelected] = useState(null);

  return (
    <AppContext.Provider value={{ selected, setSelected }}>
      {children}
    </AppContext.Provider>
  );
}
