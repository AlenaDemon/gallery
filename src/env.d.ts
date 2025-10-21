interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // добавляй сюда другие свои переменные, если будут
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
