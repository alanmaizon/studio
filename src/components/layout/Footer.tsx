export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2 py-8 px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Bloomscape. All rights reserved.</p>
        <p>Bringing nature to your doorstep.</p>
      </div>
    </footer>
  );
}
