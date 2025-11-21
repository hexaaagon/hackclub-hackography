import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  apiKey: process.env.HACKCLUBAI_API_KEY,
  baseURL: "https://ai.hackclub.com/proxy/v1",
});
