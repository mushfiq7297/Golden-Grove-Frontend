import ProductCard from "./ProductCard"
import utensilsImage from "@/assets/product_Utensil.jpg"
import doorImage from "@/assets/BAMBOO_DOOR.jpg"

import decorImage2 from "@/assets/home_decore2.jpg"
import productBoul from "@/assets/product_bowl.jpg"
import choppingBoard from "@/assets/ChppingBoard.jpg"
import FloorBlock from "@/assets/bamboo_sheet.jpg"



import { ScrollReveal } from "./ScrollReveal"

const products = [
  {
    title: "Chopping board",
    description: "Stronger than wood, kinder to the Earth, naturally stylish chopping",
    price: "$29.99",
    image:  choppingBoard,
  },
  {
    title: "Tablewear ",
    description: "Dine with peace of mind: Bamboo tableware offers a durable, non-toxic, and naturally antibacterial alternative that's good for your family and the planet",
    price: "$29.99",
    image:  productBoul,
  },
  {
    title: "Door",
    description: "Make a sustainable statement with Bamboo doors, a naturally strong, moisture-resistant, and stylish alternative to traditional wood",
    price: "$39.99",
    image: doorImage,
  },
  {
    title: "Floorboard & Block",
    description: "Craft your future with Bamboo Floorboard & Block, a stylish, sustainable, and ultra-durable flooring and furniture choice that's twice as hard as oak",
    price: "$49.99",
    image: FloorBlock,
  },
  {
    title: "Bed Mat",
    description: "Stay cool, dry, and healthy all night with the naturally breathable, hypoallergenic, and antibacterial bamboo bed mat",
    price: "$49.99",
    image: decorImage2,
  },
  {
    title: "Disposable Bamboo Products",
    description: "Eco-friendly, durable, biodegradable, and perfect for sustainable dining at homes and events.",
    price: "$49.99",
    image: utensilsImage,
  },

]

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-primary/15">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Featured Products
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              Explore our carefully curated selection of premium bamboo products — where
              sustainability meets style.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProductShowcase
