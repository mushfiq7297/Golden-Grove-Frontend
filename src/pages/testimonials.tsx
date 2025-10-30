"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Smile } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Eco-Conscious Consumer",
    content:
      "These bamboo products have completely transformed my kitchen. Not only are they beautiful, but I feel good knowing I'm making sustainable choices.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    content:
      "The quality is outstanding! I've recommended these bamboo pieces to all my clients. They're durable, elegant, and perfect for modern sustainable living.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Home Chef",
    content:
      "I've been using the bamboo utensil set for months now, and they still look brand new. The natural antibacterial properties are a huge plus!",
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary/15 py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Smile className="h-8 w-8 text-primary" />
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Happy Customers
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
            See what our customers are saying about their bamboo experience
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-[var(--shadow-soft)] hover:border-primary/40">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="mb-4 flex gap-1 items-center justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="mb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    “{testimonial.content}”
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
