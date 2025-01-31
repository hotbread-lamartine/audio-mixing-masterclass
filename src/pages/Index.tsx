import { Hero } from "@/components/Hero";
import { TutorialCard } from "@/components/TutorialCard";
import { CategoryCard } from "@/components/CategoryCard";
import { AudioWaveform, Sliders, Mic2, Music2, Monitor, Settings, Computer, Gauge } from "lucide-react";

const featuredTutorials = [
  {
    title: "Understanding EQ: The Fundamentals",
    description: "Learn how to properly use equalization to shape your sound and create space in your mix.",
    category: "EQ & Filtering",
    duration: "45 min",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Mastering Compression Techniques",
    description: "Deep dive into compression: from basic principles to advanced techniques.",
    category: "Dynamics",
    duration: "60 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Vocal Processing Masterclass",
    description: "Professional techniques for achieving crystal clear, radio-ready vocals.",
    category: "Vocal Production",
    duration: "90 min",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1000",
  },
] as const;

const categories = [
  { title: "EQ & Filtering", icon: <AudioWaveform className="w-8 h-8" /> },
  { title: "Dynamics", icon: <Sliders className="w-8 h-8" /> },
  { title: "Vocal Production", icon: <Mic2 className="w-8 h-8" /> },
  { title: "Mastering", icon: <Music2 className="w-8 h-8" /> },
  { title: "Reaper", icon: <Computer className="w-8 h-8" /> },
  { title: "Cubase", icon: <Monitor className="w-8 h-8" /> },
  { title: "Luna", icon: <Settings className="w-8 h-8" /> },
  { title: "Traitement du Son", icon: <AudioWaveform className="w-8 h-8" /> },
  { title: "Mesure du Son", icon: <Gauge className="w-8 h-8" /> },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.title} {...tutorial} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}