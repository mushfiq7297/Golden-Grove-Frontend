import { Leaf, Recycle, Shield, Sparkles, Sprout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/ScrollReveal"


const features = [
  {
    icon: Recycle,
    title: "Rapidly Renewable",
    description: "Grows back quickly, ensuring minimal environmental impact.",
  },
  {
    icon:Sparkles ,
    title: "Low Water Usage",
    description: "Thrives without pesticides or fertilizers.",
  },
  {
    icon: Shield,
    title: "Naturally Durable",
    description: "Resistant to warping, cracking, and daily wear.",
  },
  {
    icon: Leaf,
    title: "Carbon Neutral",
    description: "Helps restore balance to our ecosystem.",
  },
]

const Features = () => {
  return (
    <section className="bg-primary/15 py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Header icon */}
        <ScrollReveal>
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
            <Sprout className="h-8 w-8 text-primary   dark:text-gray-400" />
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-muted   dark:text-gray-400">
              Why Choose Bamboo?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted/75 md:text-lg   dark:text-gray-400">
              Bamboo is the ultimate eco-friendly material. Unlike trees that take decades to mature, bamboo can be harvested in just 3–5 years — without the need for replanting. It regenerates naturally, absorbs more carbon dioxide than most plants, and releases 35% more oxygen into the atmosphere.


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
