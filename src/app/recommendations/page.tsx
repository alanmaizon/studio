import PlantRecommendationForm from "@/components/recommendations/PlantRecommendationForm";

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-2xl">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-primary tracking-tight sm:text-5xl">Find Your Perfect Plant</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Let our AI help you discover plants that match your home environment and preferences.
        </p>
      </header>
      <PlantRecommendationForm />
    </div>
  );
}
