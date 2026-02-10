import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import product2 from "@/assets/product-2.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Sage Co-ord Set",
      price: 2100,
      size: "M",
      quantity: 1,
      image: product2,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-light tracking-tight mb-12">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-8">Your cart is empty</p>
              <Button asChild>
                <a href="/collections">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b border-border pb-6">
                    <div className="w-32 h-40 bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-light">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">Size: {item.size}</p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-muted p-6 sticky top-24">
                  <h2 className="text-lg font-light mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  <Button className="w-full h-12" size="lg">
                    PROCEED TO CHECKOUT
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
