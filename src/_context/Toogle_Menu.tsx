import React, { createContext, useContext, useState } from "react";

interface ToggleContextType {
  toggle: number;
  setToggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<number>(0);

  const toggleHandler = () => {
    setToggle((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <ToggleContext.Provider value={{ toggle, setToggle: toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
