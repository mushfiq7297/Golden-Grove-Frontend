import ProductCard from "./ProductCard"
import utensilsImage from "@/assets/product_Utensil.jpg"
import textilesImage from "@/assets/home_decor.jpg"
import decorImage from "@/assets/Bamboo Toothbrush 1.jpg"
import { ScrollReveal } from "./ScrollReveal"

const products = [
  {
    title: "Bamboo Utensil Set",
    description: "Elegant cutlery set perfect for everyday dining.",
    price: "$29.99",
    image: utensilsImage,
  },
  {
    title: "Bamboo Fiber Textiles",
    description: "Soft, breathable fabrics for comfort and style.",
    price: "$39.99",
    image: textilesImage,
  },
  {
    title: "Home Decor Collection",
    description: "Beautiful pieces to enhance your living space.",
    price: "$49.99",
    image: decorImage,
  },
]

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background">
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
