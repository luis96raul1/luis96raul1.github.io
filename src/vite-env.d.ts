/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form ID — the part after `/f/` in your endpoint. Set in `.env`. */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
