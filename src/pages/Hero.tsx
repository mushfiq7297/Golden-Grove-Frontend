"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center justify-center overflow-hidden m-auto",
        "bg-background text-foreground"
      )}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/ds0w2qqT/hero-bamboo.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              100% Sustainable Materials
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Crafting a <span className="text-primary">Greener</span> Tomorrow
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            As Bangladesh's modern innovator in sustainable manufacturing, we design
            beautiful, high-quality bamboo products that are both kind to the planet
            and built to last.
          </p>

          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
