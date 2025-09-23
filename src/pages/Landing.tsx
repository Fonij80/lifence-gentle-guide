import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Shield, Zap, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Lifence</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-large text-muted-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Healthy Habits for a Longer, Happier Life
              </h1>
              <p className="text-xl-large text-primary-foreground/90 max-w-2xl">
                Lifence is your friendly companion that reminds you to stay on track with simple, personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="xl" className="shadow-button">
                  <Link to="/signup">
                    Start Your Healthy Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Happy older adult with AI companion" 
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Lifence Works</h2>
            <p className="text-xl-large text-muted-foreground max-w-3xl mx-auto">
              Getting started with healthy habits has never been easier. Follow these simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl-large font-semibold mb-4">Choose Your Habit</h3>
              <p className="text-large text-muted-foreground">
                Select a healthy habit like drinking water, taking medication, or light exercise.
              </p>
            </Card>
            
            <Card className="p-8 text-center gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl-large font-semibold mb-4">Get Gentle Reminders</h3>
              <p className="text-large text-muted-foreground">
                Receive friendly reminders through Telegram at the perfect time for you.
              </p>
            </Card>
            
            <Card className="p-8 text-center gradient-card shadow-card border-0">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl-large font-semibold mb-4">Stay Consistent</h3>
              <p className="text-large text-muted-foreground">
                Build lasting habits with support from your AI buddy who understands you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Lifence Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Lifence?</h2>
              <p className="text-xl-large text-muted-foreground mb-8">
                Unlike complicated apps, Lifence is simple, supportive, and speaks your language.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Reminders</h3>
                    <p className="text-large text-muted-foreground">
                      Get reminders that fit your schedule and preferences perfectly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                    <p className="text-large text-muted-foreground">
                      No complicated settings - just simple, clear steps to get started.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Friendly AI Chat</h3>
                    <p className="text-large text-muted-foreground">
                      Chat with a supportive AI that feels like talking to a caring friend.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                    <p className="text-large text-muted-foreground">
                      Your personal information is safe, secure, and never shared.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 gradient-card shadow-card border-0">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-8 w-8 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-xl-large italic mb-6">
                  "Lifence helped me remember my medications every day. It's like having a caring friend who never forgets!"
                </blockquote>
                <cite className="text-large font-semibold">— Margaret, 67</cite>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-foreground">
            Take the First Step Toward Better Health Today
          </h2>
          <p className="text-xl-large text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are building healthier habits with Lifence.
          </p>
          <Button asChild variant="hero" size="xl" className="shadow-button">
            <Link to="/signup">
              Start Your Journey Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Lifence</span>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link to="#" className="text-large text-muted-foreground hover:text-primary transition-colors">
                About Lifence
              </Link>
              <Link to="#" className="text-large text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-large text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
            
            <p className="text-large text-muted-foreground">
              Made with ❤️ by Lifence Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;