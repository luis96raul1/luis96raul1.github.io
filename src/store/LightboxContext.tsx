import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type LightboxContextValue = {
  src: string | null;
  open: (src: string) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);

  const open = useCallback((s: string) => setSrc(s), []);
  const close = useCallback(() => setSrc(null), []);

  return (
    <LightboxContext.Provider value={{ src, open, close }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used inside LightboxProvider');
  return ctx;
}
