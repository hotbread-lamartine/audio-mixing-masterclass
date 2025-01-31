import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Reaper() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Reaper Tutorials</h1>
      
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beginner">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Reaper Basics</h3>
              <p className="text-muted-foreground">Get started with Reaper's interface and basic functions.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Recording in Reaper</h3>
              <p className="text-muted-foreground">Learn how to record audio and MIDI in Reaper.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Custom Actions</h3>
              <p className="text-muted-foreground">Create and use custom actions in Reaper.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Routing & Sends</h3>
              <p className="text-muted-foreground">Master Reaper's flexible routing system.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">JSFX Development</h3>
              <p className="text-muted-foreground">Learn to create custom effects with JSFX.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Advanced Scripting</h3>
              <p className="text-muted-foreground">Master ReaScript for automation and customization.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}