
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSpiritualGuidance = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a compassionate and wise spiritual guide. You provide insights based on Vedic knowledge, Hindu scriptures (like Gita, Vedas, Puranas), and offer encouraging advice for mental peace and spiritual growth. Keep responses concise and peaceful.",
      }
    });
    return response.text || "I apologize, but I am unable to provide guidance at this moment. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The divine connection is temporarily interrupted. Please check your internet or try again.";
  }
};

export const getDailyHoroscope = async (sign: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a daily horoscope for zodiac sign ${sign}. Include one lucky number and one lucky color.`,
      config: {
        systemInstruction: "You are an expert Vedic astrologer. Provide a brief, positive, and insightful daily horoscope.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Astrological insights are currently unavailable.";
  }
};
