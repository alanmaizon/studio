import type { PlantRecommendationOutput } from "@/ai/flows/plant-recommendation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";

interface PlantRecommendationResultsProps {
  recommendation: PlantRecommendationOutput;
}

export default function PlantRecommendationResults({ recommendation }: PlantRecommendationResultsProps) {
  const plantsArray = recommendation.plants
    .split('\n')
    .map(plant => plant.trim().replace(/^- /, '')) // Remove list markers like '-'
    .filter(plant => plant.length > 0);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline text-2xl text-primary">Your Personalized Plant Recommendations</CardTitle>
        </div>
        <CardDescription>Based on your inputs, here are some plants that might thrive in your space!</CardDescription>
      </CardHeader>
      <CardContent>
        {plantsArray.length > 0 ? (
          <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/90">
            {plantsArray.map((plant, index) => (
              <li key={index} className="text-md">{plant}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No specific plant recommendations could be generated. Try adjusting your preferences.</p>
        )}
        <p className="mt-6 text-sm text-muted-foreground">
          Remember to research specific care needs for any plant you choose. Happy planting!
        </p>
      </CardContent>
    </Card>
  );
}
