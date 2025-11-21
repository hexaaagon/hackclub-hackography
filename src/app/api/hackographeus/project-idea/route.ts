import { streamText, type UIMessage, convertToModelMessages } from "ai";
import { openai } from "@/lib/hackographeus/base";
import { generateProjectIdeaPrompt } from "@/lib/hackographeus/prompts/project-idea";

export async function POST(req: Request) {
  const result = streamText({
    model: openai.chat("deepseek/deepseek-v3.2-exp"),
    prompt: generateProjectIdeaPrompt(),
  });

  return result.toUIMessageStreamResponse();
}
