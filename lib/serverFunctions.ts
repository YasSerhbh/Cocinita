"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";


export const generatePrompt = async (prompt: string) => {

    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not defined");
    }
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-001" });
    
    const prompto = `For development reasons, the response must be in arabic and a JSON object which has an array of 3 recipes, each one contains name, description, an array of ingredients (with type of string) and instuctions: اعطيني ثلاث وصفات جزائرية يمكن صنعها بالمكونات التالية: ${prompt}`;
    
    const result = await model.generateContent(prompto);
    // console.log(result.response.text());

    const myResult = result.response.text().replace('```json', '').replace('```', '');


    return result.response.text();
}