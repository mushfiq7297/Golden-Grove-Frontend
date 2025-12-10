"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bambooHut from "@/assets/Bamboohut.jpg"
import bambooRestaurent from "@/assets/BambooRestaurent.jpg"
import about1 from "@/assets/about1.jpg"
import about2 from "@/assets/about2.jpg"
import about3 from "@/assets/about3.jpg"





const About = () => {
   const navigate = useNavigate();
  return (
    <section className="py-24 bg-primary/15">
      <div className="container mx-auto px-6">

        {/* ---------------- TOP CENTERED INTRO ---------------- */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"
          >
            <Heart className="h-8 w-8 text-primary" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
           Bamboo: The Future of Sustainable Living

          </motion.h2>

          <motion.p
            className="text-muted-foreground md:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
           Strong as steel. Softer than cotton. Grows 10 times faster than traditional timber.
Bamboo is more than just a plant — it’s one of nature’s most remarkable gifts. As one of the fastest-growing renewable resources on Earth, bamboo helps us build a cleaner, greener, and more responsible world.

          </motion.p>

          <motion.p
            className="text-muted-foreground md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
           At goldgrove, we’ve made it our mission to harness the natural strength and beauty of bamboo to create sustainable, stylish, and durable products for modern living.

          </motion.p>
        </div>

        {/* ---------------- MIDDLE GRID: LEFT + RIGHT ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
              🏡 Sustainability Meets Everyday Living

            </h3>

            <p className="text-muted-foreground md:text-lg leading-relaxed mb-4">
              From elegant bamboo furniture and home décor to kitchenware, clothing, and personal care products, our collection combines nature’s simplicity with modern design. Each product reflects our commitment to responsible sourcing, ethical craftsmanship, and environmental preservation.

            </p>

            <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">
              Whether you’re redesigning your home, refreshing your wardrobe, or searching for thoughtful eco-gifts, our bamboo creations offer the perfect blend of style, function, and sustainability.

            </p>
            <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
              🌱 Our Mission
            </h3>

            <p className="text-muted-foreground md:text-lg leading-relaxed mb-4">
              We believe conscious choices inspire meaningful change. By choosing bamboo,
              you're supporting renewable materials, reduced plastic usage, and the
              preservation of natural forests.
            </p>

            <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">
              Every product you bring home contributes to a circular economy — enabling
              a cleaner, healthier environment for generations to come.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              ✨ Join the Green Revolution
            </h3>

            <p className="text-muted-foreground md:text-lg leading-relaxed mb-8">
              Explore our eco-friendly bamboo collection and see how small lifestyle
              changes can make a big impact on the planet.
            </p>

            <Button onClick={() => navigate("/products")}  className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Our Bamboo Collection
            </Button>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="grid grid-cols-2 gap-4">

    {/* LARGE WIDE IMAGE */}
    <div className="col-span-2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
      <img
        src={bambooHut}
        alt="Bamboo house"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TALL IMAGE LEFT */}
    <div className="row-span-2 h-72 rounded-2xl overflow-hidden shadow-md">
      <img
        src={bambooRestaurent}
        alt="Bamboo decor"
        className="w-full h-full object-cover"
      />
    </div>

    {/* MEDIUM IMAGE */}
    <div className="h-36 rounded-2xl overflow-hidden shadow-md">
      <img
        src={about1}
        alt="Bamboo lifestyle"
        className="w-full h-full object-cover"
      />
    </div>

    {/* SMALL IMAGE */}
    <div className="h-40 rounded-2xl overflow-hidden shadow-md">
      <img
        src={about2}
        alt="Bamboo item"
        className="w-full h-full object-cover"
      />
    </div>

    {/* WIDE SHORT IMAGE */}
    <div className="col-span-2 h-40 rounded-2xl overflow-hidden shadow-md">
      <img
        src={about3}
        alt="Bamboo structure"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RANDOM SQUARE IMAGE */}
   

  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;
