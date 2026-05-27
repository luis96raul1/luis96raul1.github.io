import { createContext, Dispatch, SetStateAction } from 'react';

interface ModalContextType {
  fullShow: string | false;
  setFullShow: Dispatch<SetStateAction<string | false>>;
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);
