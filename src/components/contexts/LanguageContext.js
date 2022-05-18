import { createContext } from 'react';

export const languageContext = createContext();

// export const LanguageContext = ({ children }) => {
//   const [language, setLanguage] = useState('en');

//   return (
//     <languageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </languageContext.Provider>
//   )
// }