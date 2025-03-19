import { Music, Trophy, UserCircle, Headphones, BarChart3, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Extensive Track Library",
      description: "Access thousands of tracks across all genres and eras to test your music knowledge",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Global Leaderboards",
      description: "Compete with friends and music enthusiasts worldwide to climb the rankings",
    },
    {
      icon: <UserCircle className="h-10 w-10 text-primary" />,
      title: "Personalized Experience",
      description: "Connect with your music streaming services for quizzes based on your listening habits",
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Audio Snippets",
      description: "Identify songs from short audio clips with varying difficulty levels",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Detailed Statistics",
      description: "Track your progress and see how your music knowledge improves over time",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Community Challenges",
      description: "Join weekly and monthly challenges with special themes and prizes",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Designed for Music Lovers</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform offers a comprehensive set of features to challenge and enhance your music knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:bg-background/60"
            >
              <CardHeader>
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

