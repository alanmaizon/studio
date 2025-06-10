"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { plantRecommendation, PlantRecommendationInput, PlantRecommendationOutput } from "@/ai/flows/plant-recommendation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import PlantRecommendationResults from "./PlantRecommendationResults";

const climates = ["Temperate", "Tropical", "Desert", "Continental", "Polar"];
const lightLevels = ["Low Light", "Medium Light", "Bright Indirect Light", "Direct Sunlight"];

const formSchema = z.object({
  climate: z.string().min(1, "Please select your local climate."),
  lightLevel: z.string().min(1, "Please select the light level in your home."),
  preferences: z.string().min(5, "Please describe your preferences (min. 5 characters).").max(200, "Preferences cannot exceed 200 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function PlantRecommendationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<PlantRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      climate: "",
      lightLevel: "",
      preferences: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const input: PlantRecommendationInput = {
        climate: values.climate,
        lightLevel: values.lightLevel,
        preferences: values.preferences,
      };
      const result = await plantRecommendation(input);
      setRecommendation(result);
    } catch (e) {
      setError("Failed to get recommendations. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow-sm bg-card">
          <FormField
            control={form.control}
            name="climate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Local Climate</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your climate" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {climates.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lightLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Light Level in Your Home</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select light level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {lightLevels.map(ll => <SelectItem key={ll} value={ll}>{ll}</SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Preferences</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., I like colorful flowers, low-maintenance plants, pet-friendly options, or plants that grow tall."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Recommendations"}
          </Button>
        </form>
      </Form>
      
      {error && <p className="text-destructive text-center">{error}</p>}
      
      {recommendation && <PlantRecommendationResults recommendation={recommendation} />}
    </div>
  );
}
