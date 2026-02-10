import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Minus, Plus, Share2 } from "lucide-react";
import product2 from "@/assets/product-2.jpg";
import modelKurti from "@/assets/model-kurti-1.jpg";
import modelDress from "@/assets/model-dress-1.jpg";
import modelTop from "@/assets/model-top-1.jpg";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["XS", "S", "M", "L", "XL"];

  const recommendedProducts = [
    {
      id: "1",
      name: "Indigo Dream Kurti",
      price: 1650,
      image: modelKurti,
      category: "Kurtis"
    },
    {
      id: "2",
      name: "Sunrise Maxi Dress",
      price: 2400,
      image: modelDress,
      category: "Dresses"
    },
    {
      id: "3",
      name: "Terracotta Top",
      price: 1200,
      image: modelTop,
      category: "Tops"
    }
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this beautiful piece from Zaarava";
    
    switch(platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we copy to clipboard
        navigator.clipboard.writeText(url);
        alert('Link copied! Share it on Instagram');
        break;
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={product2}
                alt="Premium Blazer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground tracking-wide uppercase mb-2">
                  Co-ords
                </p>
                <h1 className="text-3xl md:text-4xl font-light mb-4">Sage Co-ord Set</h1>
                <p className="text-2xl font-medium">₹2,100</p>
              </div>

              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed italic mb-4">
                  "A co-ord that feels like freedom and calm stitched together."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Crafted from soft cotton-linen blend, this Indo-Western co-ord set embodies
                  effortless elegance. Features a relaxed fit with delicate hand-block details.
                  Perfect for both everyday grace and special moments.
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3 tracking-wide">SELECT SIZE</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-12 border transition-colors ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3 tracking-wide">QUANTITY</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart & Buy Now */}
              <div className="flex gap-4 mb-6">
                <Button className="flex-1 h-12 text-sm tracking-wide" size="lg" variant="outline">
                  ADD TO CART
                </Button>
                <Button className="flex-1 h-12 text-sm tracking-wide" size="lg">
                  BUY NOW
                </Button>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-3 pb-6 border-b border-border">
                <span className="text-sm font-medium tracking-wide">SHARE:</span>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-10 h-10 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                  aria-label="Share on WhatsApp"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('instagram')}
                  className="w-10 h-10 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                  aria-label="Share on Instagram"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('pinterest')}
                  className="w-10 h-10 border border-border hover:border-foreground transition-colors flex items-center justify-center"
                  aria-label="Share on Pinterest"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-8 pt-8 space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">FABRIC & CARE</h4>
                  <p className="text-sm text-muted-foreground">
                    Cotton-linen blend. Hand wash cold. Lay flat to dry.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">FIT DETAILS</h4>
                  <p className="text-sm text-muted-foreground">
                    Model is 5'6" and wearing size S. Relaxed, comfortable fit.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">DELIVERY & RETURNS</h4>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders above ₹2,000. Easy 7-day returns. <a href="#" className="underline hover:text-foreground">Learn more</a>
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">ETHICALLY MADE</h4>
                  <p className="text-sm text-muted-foreground">
                    Hand-chosen fabrics, slow-crafted with care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
