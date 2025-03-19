import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to test your music knowledge?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of music enthusiasts and put your skills to the test. Sign up today and get access to all
              our premium quizzes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-8">
                Start Quizzing Now
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

