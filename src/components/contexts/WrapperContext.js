import { useState } from "react";

import { languageContext } from "./LanguageContext";
import { ModalContext } from "./ModalContext";

export const WrapperContext = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [fullShow, setFullShow] = useState(false);

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <ModalContext.Provider value={{ fullShow, setFullShow }}>
        {children}
      </ModalContext.Provider>
    </languageContext.Provider>
  )
}