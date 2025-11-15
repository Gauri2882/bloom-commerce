import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";

// Mock product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch", price: 249.99, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Laptop Backpack", price: 59.99, category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
  { id: 4, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500" },
  { id: 5, name: "Running Shoes", price: 129.99, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: 6, name: "Desk Lamp", price: 39.99, category: "Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ShopHub</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/auth")}>Login</Button>
            <Button onClick={() => navigate("/cart")} className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
