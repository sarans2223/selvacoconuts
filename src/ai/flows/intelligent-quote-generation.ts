'use server';

/**
 * @fileOverview This file defines a Genkit flow for intelligent quote generation based on user input.
 *
 * It includes:
 * - generateQuote - A function to generate a tailored quote based on user's coir product needs.
 * - QuoteRequestInput - The input type for the generateQuote function, defining the structure of the quote request.
 * - QuoteResponseOutput - The output type for the generateQuote function, defining the structure of the generated quote.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuoteRequestInputSchema = z.object({
  requestDetails: z
    .string()
    .describe(
      'Detailed description of the coir products required, including type, quantity, and any specific requirements.'
    ),
});
export type QuoteRequestInput = z.infer<typeof QuoteRequestInputSchema>;

const QuoteResponseOutputSchema = z.object({
  quoteDetails: z
    .string()
    .describe(
      'A detailed quote outlining the products requested, pricing, and estimated delivery time.'
    ),
});
export type QuoteResponseOutput = z.infer<typeof QuoteResponseOutputSchema>;

export async function generateQuote(input: QuoteRequestInput): Promise<QuoteResponseOutput> {
  return intelligentQuoteFlow(input);
}

const quotePrompt = ai.definePrompt({
  name: 'quotePrompt',
  input: {schema: QuoteRequestInputSchema},
  output: {schema: QuoteResponseOutputSchema},
  prompt: `You are an expert in providing quotes for coir products. Based on the customer's request, generate a detailed quote including product types, pricing, and estimated delivery time.\n\nRequest Details: {{{requestDetails}}}`,
});

const intelligentQuoteFlow = ai.defineFlow(
  {
    name: 'intelligentQuoteFlow',
    inputSchema: QuoteRequestInputSchema,
    outputSchema: QuoteResponseOutputSchema,
  },
  async input => {
    const {output} = await quotePrompt(input);
    return output!;
  }
);
