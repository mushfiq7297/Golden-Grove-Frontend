"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Leaf, Recycle, Users, Globe } from "lucide-react"

const stats = [
  {
    icon: Leaf,
    label: "Bamboo Trees Saved",
    target: 12500,
    suffix: "+",
  },
  {
    icon: Recycle,
    label: "Plastic Items Replaced",
    target: 32000,
    suffix: "+",
  },
  {
    icon: Users,
    label: "Happy Customers",
    target: 4800,
    suffix: "+",
  },
  {
    icon: Globe,
    label: "Countries Reached",
    target: 25,
    suffix: "",
  },
]

// Count-up animation when visible
const CountUpNumber = ({ target, suffix }: { target: number; suffix?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const stepTime = 20
    const increment = target / (duration / stepTime)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setCount(Math.floor(start))
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <motion.span
      ref={ref}
      className="text-4xl font-bold text-primary sm:text-5xl"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}

const RealtimeStats = () => {
  return (
    <section className="py-24 bg-primary/15 ">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-muted   dark:text-gray-400">
            Our Impact in Numbers
          </h2>
          <p className="mb-12 text-muted/75 max-w-2xl mx-auto text-base md:text-lg   dark:text-gray-400">
            Together, we’re building a greener tomorrow through sustainable bamboo solutions.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm transition-all hover:shadow-[var(--shadow-soft)] hover:border-primary/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <CountUpNumber target={stat.target} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RealtimeStats
