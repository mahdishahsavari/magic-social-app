import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = `AIzaSyAALx_XZpw9KVrWrFiMw0d0aJj1EO0_vGo`;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  maxOutputTokens: 8192,
  temperature: 1,
  topP: 0.1,
  topK: 64,
  responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
