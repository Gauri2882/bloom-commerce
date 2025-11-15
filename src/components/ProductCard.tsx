import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-semibold text-lg text-foreground mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="lg">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
