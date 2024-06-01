"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { DataValues } from "@/types/types";

interface AppContextType {
  letters: string[];
  setLetters: Dispatch<SetStateAction<string[]>>;
  generateValues: DataValues | undefined;
  setGenerateValues: Dispatch<SetStateAction<DataValues | undefined>>;
  resetForm: boolean;
  setResetForm: Dispatch<SetStateAction<boolean>>;
  isLoadingLetters: boolean;
  setIsLoadingLetters: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [generateValues, setGenerateValues] = useState<DataValues | undefined>(
    undefined
  );
  const [isLoadingLetters, setIsLoadingLetters] = useState<boolean>(true);
  const [resetForm, setResetForm] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        letters,
        setLetters,
        generateValues,
        setGenerateValues,
        resetForm,
        setResetForm,
        isLoadingLetters,
        setIsLoadingLetters,
      }}
    >
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