import React, { createContext, useContext, useState } from "react";

// Définition du contexte
interface ToggleContextType {
  toggle: number;
  setToggle: () => void; // La fonction ne prend pas de paramètre
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Fournisseur du contexte
export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<number>(0);

  const toggleHandler = () => {
    setToggle((prev) => (prev === 1 ? 0 : 1)); // Alterne entre 1 et 0
  };

  return (
    <ToggleContext.Provider value={{ toggle, setToggle: toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
