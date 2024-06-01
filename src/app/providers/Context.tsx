"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  letters: string[];
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [letters, setLetters] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ letters, setLetters }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
