import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    age: "",
    habits: [] as string[],
    reminderTime: ""
  });
  const { toast } = useToast();

  const habitOptions = [
    { id: "water", label: "Drink Water", icon: "💧" },
    { id: "medication", label: "Take Medication", icon: "💊" },
    { id: "exercise", label: "Light Exercise", icon: "🚶" },
    { id: "meditation", label: "Meditation", icon: "🧘" },
    { id: "vitamins", label: "Take Vitamins", icon: "🟡" },
    { id: "sleep", label: "Regular Sleep", icon: "😴" },
    { id: "reading", label: "Daily Reading", icon: "📚" },
    { id: "walking", label: "Daily Walk", icon: "👟" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to your healthy journey!",
      description: "Your personalized habit plan is ready. Let's get started!",
    });
    // In a real app, this would redirect to the main app interface
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleHabitChange = (habitId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      habits: checked 
        ? [...prev.habits, habitId]
        : prev.habits.filter(h => h !== habitId)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Lifence</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Personalize Your Experience
            </h1>
            <p className="text-xl-large text-muted-foreground">
              Tell us a bit about yourself so we can create the perfect habit plan for you.
            </p>
          </div>

          <Card className="p-8 gradient-card shadow-card border-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Age Section */}
              <div className="space-y-4">
                <h2 className="text-xl-large font-semibold">Your Age</h2>
                <p className="text-large text-muted-foreground">
                  This helps us provide age-appropriate reminders and tips.
                </p>
                <Select value={formData.age} onValueChange={(value) => setFormData(prev => ({...prev, age: value}))}>
                  <SelectTrigger className="h-14 text-large">
                    <SelectValue placeholder="Select your age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-55">50-55 years</SelectItem>
                    <SelectItem value="56-60">56-60 years</SelectItem>
                    <SelectItem value="61-65">61-65 years</SelectItem>
                    <SelectItem value="66-70">66-70 years</SelectItem>
                    <SelectItem value="71-75">71-75 years</SelectItem>
                    <SelectItem value="76+">76+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Habits Section */}
              <div className="space-y-4">
                <h2 className="text-xl-large font-semibold">Choose Your Habits</h2>
                <p className="text-large text-muted-foreground">
                  Select the healthy habits you'd like to build. You can always change these later.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {habitOptions.map((habit) => (
                    <div key={habit.id} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                      <Checkbox
                        id={habit.id}
                        checked={formData.habits.includes(habit.id)}
                        onCheckedChange={(checked) => handleHabitChange(habit.id, checked as boolean)}
                        className="w-5 h-5"
                      />
                      <Label htmlFor={habit.id} className="text-large flex items-center gap-2 cursor-pointer">
                        <span className="text-xl">{habit.icon}</span>
                        {habit.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reminder Time Section */}
              <div className="space-y-4">
                <h2 className="text-xl-large font-semibold">Reminder Preferences</h2>
                <p className="text-large text-muted-foreground">
                  When would you like to receive your gentle reminders?
                </p>
                <Select value={formData.reminderTime} onValueChange={(value) => setFormData(prev => ({...prev, reminderTime: value}))}>
                  <SelectTrigger className="h-14 text-large">
                    <SelectValue placeholder="Choose your preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8:00 AM - 10:00 AM)</SelectItem>
                    <SelectItem value="midday">Midday (12:00 PM - 2:00 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (3:00 PM - 5:00 PM)</SelectItem>
                    <SelectItem value="evening">Evening (6:00 PM - 8:00 PM)</SelectItem>
                    <SelectItem value="multiple">Multiple times a day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">You're Almost Ready!</h3>
                    <p className="text-large text-muted-foreground">
                      Once you save your preferences, Lifence will start sending you personalized reminders to help you build these healthy habits.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full shadow-button"
                disabled={!formData.age || formData.habits.length === 0 || !formData.reminderTime}
              >
                Save & Start My Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;