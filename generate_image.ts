import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function generateShivaImage() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          text: 'A high-quality, spiritually powerful image of Lord Shiva for Mahamrityunjaya Puja. Lord Shiva is in deep meditation, surrounded by a divine aura and cosmic energy. The atmosphere is serene and sacred, with soft light illuminating the scene. The image should convey peace, protection, and transcendence. Cinematic lighting, 4k resolution, highly detailed.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
        imageSize: "1K"
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64Data = part.inlineData.data;
      console.log(base64Data);
      return;
    }
  }
}

generateShivaImage();
