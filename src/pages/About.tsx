"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const About = () => {
  return (
    <section className="py-24 bg-primary/15">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <motion.div
            className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heart className="h-8 w-8 text-primary" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Bamboo Story
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            className="mb-6 text-base md:text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bamboo is one of the fastest-growing plants on Earth, regenerating naturally 
            without the need for pesticides or fertilizers. It absorbs more CO₂ and releases 
            35% more oxygen than equivalent trees, making it a powerful ally in fighting 
            climate change.
          </motion.p>

          <motion.p
            className="mb-10 text-base md:text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our mission is to bring the beauty and sustainability of bamboo into your 
            everyday life. Each product is carefully crafted to showcase bamboo’s natural 
            elegance while supporting a healthier planet for future generations.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Discover Our Process
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
