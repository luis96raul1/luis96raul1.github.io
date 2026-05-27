import { useState, ReactNode } from "react";
import { languageContext } from "./LanguageContext";
import { ModalContext } from "./ModalContext";

interface WrapperContextProps {
  children: ReactNode;
}

export const WrapperContext = ({ children }: WrapperContextProps) => {
  const [language, setLanguage] = useState('en');
  const [fullShow, setFullShow] = useState<string | false>(false);

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <ModalContext.Provider value={{ fullShow, setFullShow }}>
        {children}
      </ModalContext.Provider>
    </languageContext.Provider>
  )
}
