import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
  return (
    <Dialog>
      {/* Make entire card clickable */}
      <DialogTrigger asChild>
        <Card className="group relative overflow-hidden rounded-2xl border bg-background transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
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
              <p className="hidden font-semibold text-primary">Price: {price}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <img src={image} className="w-full rounded-xl" />

          <p className="text-muted-foreground">{description}</p>

          <p className="hidden text-xl font-semibold">Price: {price}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
