import { createContext } from 'react';

export const ModalContext = createContext();

// export const ModalContextProvider = ({ children }) => {
//   const [fullShow, setFullShow] = useState(false);

//   return (
//     <ModalContext.Provider value={{ fullShow, setFullShow }}>
//       {children}
//     </ModalContext.Provider>
//   )
// }