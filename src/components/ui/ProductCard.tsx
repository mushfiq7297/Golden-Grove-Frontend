import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-square overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">{price}</span>
          <Button variant="secondary" size="sm" className="flex items-center gap-1">
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
