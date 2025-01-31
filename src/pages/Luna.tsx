import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Luna() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Luna Tutorials</h1>
      
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beginner">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Luna Fundamentals</h3>
              <p className="text-muted-foreground">Understanding Luna's unique workflow and interface.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Recording with Luna</h3>
              <p className="text-muted-foreground">Get started with recording in Luna.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Luna Instruments</h3>
              <p className="text-muted-foreground">Working with Luna's built-in instruments.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Mixing in Luna</h3>
              <p className="text-muted-foreground">Learn Luna's mixing capabilities.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Advanced Integration</h3>
              <p className="text-muted-foreground">Integrate Luna with UAD hardware.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Mastering in Luna</h3>
              <p className="text-muted-foreground">Professional mastering techniques in Luna.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}