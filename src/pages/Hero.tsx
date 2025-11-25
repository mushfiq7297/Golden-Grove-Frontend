"use client";
import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
      )}
    >
      <div className="absolute inset-0 bg-primary/15 -z-10" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-5xl px-4 sm:px-6"
      >
        <motion.h1
          variants={item}
          className="
            mb-20 
            text-4xl 
            font-bold 
            leading-tight 
            tracking-tight 
            text-muted/75 
            dark:text-gray-400

            sm:text-5xl 
            md:text-6xl 
            lg:text-7xl
          "
        >
          Crafting a <span className="text-primary">Greener</span> Tomorrow
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-12 text-base text-muted/75   dark:text-gray-400 sm:text-lg md:text-xl"
        >
          As Bangladesh’s modern innovator in sustainable manufacturing, we
          design beautiful, high-quality bamboo products that are both kind to
          the planet and built to last.
        </motion.p>
      </motion.div>

     {/* Bottom Bar */}
<div
  className="
    w-full 
    flex 
    flex-col 
    items-center 
    gap-4 
    px-4 
    pb-10

                                           
    relative 

    /* md+ = bottom overlay */
    md:absolute 
    md:bottom-6 
    md:left-0 
    md:right-0 
    md:flex-row 
    md:justify-between 
    md:px-8
  "
>
  {/* Buttons */}
  <motion.div
    variants={item}
    initial="hidden"
    animate={controls}
    className="flex flex-wrap gap-3 justify-center md:justify-start"
  >
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

  {/* Badge */}
  <motion.div
    variants={item}
    initial="hidden"
    animate={controls}
    className="
      inline-flex items-center gap-2 rounded-full 
      border border-primary/70 bg-primary/20 px-4 py-2 
      text-center md:ml-auto
    "
  >
    <span className="text-sm font-bold text-muted/75">
      100% Sustainable Materials
    </span>
  </motion.div>
</div>

    </section>
  );
}
