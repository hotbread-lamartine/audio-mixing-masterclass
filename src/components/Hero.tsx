import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="hero-gradient absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Master the Art of Audio Mixing
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Learn professional audio mixing techniques from industry experts. From basics to advanced concepts, elevate your music production skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            Get Started
          </Button>
          <Button size="lg" variant="secondary" className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 transform hover:scale-105">
            Browse Tutorials
          </Button>
        </div>
      </div>
    </div>
  );
}