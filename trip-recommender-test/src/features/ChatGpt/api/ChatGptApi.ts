import OpenAI from "openai";
import { generateTravelPrompt } from "./prompt";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export const chatResponse = async (message: string): Promise<string> => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: generateTravelPrompt
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return (
      chatCompletion.choices[0].message?.content ||
      "죄송합니다. 응답을 생성하는 데 문제가 발생했습니다."
    );
  } catch (error) {
    console.log("response error", error);
    throw new Error("AI 응답을 생성하는 데 문제가 발생했습니다.");
  }
};