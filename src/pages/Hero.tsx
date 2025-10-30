"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export function Hero() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden m-auto",
        "bg-background text-foreground"
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/SpDxg00/web-background.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/15 to-background/0" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="container relative z-10 mx-auto px-4 py-20"
      >
        <motion.div variants={item} className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              100% Sustainable Materials
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Crafting a <span className="text-primary">Greener</span> Tomorrow
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 text-lg text-foreground md:text-xl"
        >
          As Bangladesh's modern innovator in sustainable manufacturing, we
          design beautiful, high-quality bamboo products that are both kind to
          the planet and built to last.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="group hover:bg-primary/90 transition-all"
            onClick={() => navigate("/products")}
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary/10 transition-all"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
