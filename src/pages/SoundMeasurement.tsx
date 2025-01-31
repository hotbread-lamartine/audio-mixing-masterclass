import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SoundMeasurement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Sound Measurement Tutorials</h1>
      
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beginner">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Sound Measurement Basics</h3>
              <p className="text-muted-foreground">Understanding fundamental concepts of sound measurement.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Using SPL Meters</h3>
              <p className="text-muted-foreground">Learn how to use Sound Pressure Level meters.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Frequency Analysis</h3>
              <p className="text-muted-foreground">Working with spectrum analyzers and RTA tools.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Room Acoustics</h3>
              <p className="text-muted-foreground">Measuring and analyzing room acoustics.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Advanced Measurement Tools</h3>
              <p className="text-muted-foreground">Using professional measurement equipment.</p>
            </div>
            <div className="p-6 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Calibration Techniques</h3>
              <p className="text-muted-foreground">Professional calibration methods and standards.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}