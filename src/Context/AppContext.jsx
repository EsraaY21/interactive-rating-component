import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <AppContext.Provider
      value={{ selected, setSelected, submitted, setSubmitted }}
    >
      {children}
    </AppContext.Provider>
  );
}
