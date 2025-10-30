import { Leaf, Recycle, Shield, Sparkles, Sprout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"


const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sourced from sustainable bamboo forests with zero chemicals.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Fully biodegradable and compostable products.",
  },
  {
    icon: Shield,
    title: "Durable",
    description: "Stronger than traditional materials — built to last.",
  },
  {
    icon: Sparkles,
    title: "Beautiful",
    description: "Naturally elegant design that complements any lifestyle.",
  },
]

const Features = () => {
  return (
    <section className="bg-primary/15 py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Header icon */}
        <ScrollReveal>
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
            <Sprout className="h-8 w-8 text-primary" />
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Why Choose Bamboo?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              Bamboo is nature’s perfect material for sustainable living — strong, beautiful, and renewable.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.15 * index}>
              <Card className="border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
