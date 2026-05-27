import { createContext, Dispatch, SetStateAction } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const languageContext = createContext<LanguageContextType>({} as LanguageContextType);
