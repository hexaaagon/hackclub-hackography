export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HACKCLUBAI_API_KEY: string;
    }
  }
}
