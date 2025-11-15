import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Package, DollarSign, Users, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product added successfully!");
  };

  const stats = [
    { label: "Total Products", value: "24", icon: Package, color: "text-primary" },
    { label: "Revenue", value: "$12,345", icon: DollarSign, color: "text-success" },
    { label: "Customers", value: "156", icon: Users, color: "text-accent" },
    { label: "Orders", value: "89", icon: ShoppingBag, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" placeholder="Enter product name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-price">Price</Label>
                  <Input id="product-price" type="number" step="0.01" placeholder="0.00" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-category">Category</Label>
                <Input id="product-category" placeholder="Electronics, Fashion, Home..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-description">Description</Label>
                <Textarea id="product-description" placeholder="Enter product description" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-image">Image URL</Label>
                <Input id="product-image" type="url" placeholder="https://..." required />
              </div>
              <Button type="submit" size="lg">Add Product</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
