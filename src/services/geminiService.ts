import { GoogleGenAI } from "@google/genai";

// Safe initialization: Check if key exists before creating client
const apiKey = process.env.API_KEY || ''; 
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const streamChatResponse = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
) => {
  
  if (!ai) {
    throw new Error("API Key not configured. Please add GEMINI_API_KEY to your .env file.");
  }

  const systemInstruction = `You are the AAFCS Virtual Assistant. AAFCS stands for Asian Australians for Climate Solutions. 
  Your goal is to help users understand our mission to empower multicultural communities to lead on climate action.
  
  Key Information about AAFCS:
  - Mission: To bridge the gap between Asian-Australian communities and climate action through advocacy, education, and engagement.
  - Pillars: Advocacy & Policy Influence, Community Engagement, Recognition & Partnerships.
  - Values: Inclusivity, Resilience, Cultural Respect, Action.
  
  Tone: Professional, hopeful, inclusive, and knowledgeable.
  Keep responses concise (under 100 words unless asked for details). 
  If asking about specific upcoming events, mention we have community workshops planned for next month.
  If asked to donate, guide them to the 'Donate' button in the navigation.`;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history,
    });

    return chat.sendMessageStream({ message: message });
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};