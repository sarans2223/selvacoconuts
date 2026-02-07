"use server";

import { generateQuote, type QuoteRequestInput } from '@/ai/flows/intelligent-quote-generation';

export async function getQuote(input: QuoteRequestInput): Promise<{ success: boolean; quote?: string | null; error?: string }> {
  if (!input.requestDetails || input.requestDetails.length < 10) {
    return { success: false, error: "Please provide more details for an accurate quote." };
  }
  
  try {
    const response = await generateQuote(input);
    return { success: true, quote: response.quoteDetails };
  } catch (error) {
    console.error("Error generating quote:", error);
    return { success: false, error: 'An AI processing error occurred. Please try again later.' };
  }
}
