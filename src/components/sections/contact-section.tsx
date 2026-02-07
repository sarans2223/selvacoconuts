"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, MapPin, CheckCircle } from "lucide-react";
import { getQuote } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WorldMap } from "../ui/world-map";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  requestDetails: z.string().min(20, { message: "Please provide more details (min. 20 characters)." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuote, setGeneratedQuote] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      requestDetails: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setGeneratedQuote(null);
    const result = await getQuote({ requestDetails: data.requestDetails });
    setIsLoading(false);
    
    if (result.success && result.quote) {
      setGeneratedQuote(result.quote);
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error Generating Quote",
        description: result.error || "An unexpected error occurred. Please try again.",
      });
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast({
            title: "Location Found!",
            description: `Lat: ${position.coords.latitude.toFixed(4)}, Lon: ${position.coords.longitude.toFixed(4)}. This can be used to pre-fill your country.`,
          });
        },
        () => {
          toast({
            variant: "destructive",
            title: "Geolocation Error",
            description: "Could not retrieve your location. Please ensure you have granted permission.",
          });
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Unsupported Browser",
        description: "Your browser does not support geolocation.",
      });
    }
  };


  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We export worldwide. Use our intelligent tool for a quick quote or send us a message for any inquiries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Send /> Intelligent Quote Request</CardTitle>
              <CardDescription>Describe your needs, and our AI will generate a preliminary quote for you.</CardDescription>
            </CardHeader>
            <CardContent>
              {generatedQuote ? (
                <Alert variant="default" className="border-primary bg-primary/5">
                  <CheckCircle className="h-4 w-4 !text-primary" />
                  <AlertTitle className="text-primary font-bold">Your Quote is Ready!</AlertTitle>
                  <AlertDescription className="mt-2 whitespace-pre-wrap text-foreground">
                    {generatedQuote}
                  </AlertDescription>
                  <Button onClick={() => setGeneratedQuote(null)} className="mt-4">Request a New Quote</Button>
                </Alert>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="requestDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quote Request Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., 'I need a quote for 10 tons of 5kg cocopeat blocks and 5,000 grow bags shipped to Rotterdam.'"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="mr-2 h-4 w-4" />
                      )}
                      Generate Quote
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col">
             <Card className="flex-grow bg-background">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Our Global Reach</CardTitle>
                    <CardDescription>Delivering sustainable solutions across continents.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-[16/9] w-full">
                      <WorldMap />
                    </div>
                    <Button variant="outline" onClick={handleGeolocation} className="mt-4 w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Use My Location
                    </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
