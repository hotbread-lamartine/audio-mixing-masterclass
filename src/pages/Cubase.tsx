import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Cubase() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cubase Tutorials</h1>
      
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beginner">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Getting Started with Cubase</h3>
              <p className="text-muted-foreground">Learn the basics of Cubase's interface and essential features.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Basic Recording</h3>
              <p className="text-muted-foreground">Record your first audio and MIDI tracks in Cubase.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">MIDI Editing</h3>
              <p className="text-muted-foreground">Master MIDI editing and manipulation in Cubase.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Mix Console</h3>
              <p className="text-muted-foreground">Learn to use the Mix Console effectively.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Advanced Automation</h3>
              <p className="text-muted-foreground">Master automation techniques in Cubase.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">VST Expression Maps</h3>
              <p className="text-muted-foreground">Work with Expression Maps for orchestral compositions.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}