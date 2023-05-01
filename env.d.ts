/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**
   * Google APIキー
   */
  readonly VITE_APP_GOOGLE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
