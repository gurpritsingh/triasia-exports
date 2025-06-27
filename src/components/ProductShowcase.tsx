import { Card, CardContent } from "../components/ui/card";
import { Droplets, Leaf, Shirt } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      icon: Droplets,
      title: "Premium Oils",
      description: "High-quality essential oils, cooking oils, and industrial oils sourced from the finest producers globally.",
      features: ["Coconut Oil", "Palm Oil", "Essential Oils", "Industrial Lubricants"],
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      icon: Leaf,
      title: "Herbal Products",
      description: "Traditional and modern herbal remedies, supplements, and wellness products meeting international standards.",
      features: ["Ayurvedic Products", "Herbal Supplements", "Natural Extracts", "Wellness Solutions"],
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Shirt,
      title: "Premium Cotton",
      description: "Superior quality cotton products including raw cotton, cotton yarn, and finished textile products.",
      features: ["Raw Cotton", "Cotton Yarn", "Organic Cotton", "Textile Products"],
      color: "from-amber-500 to-amber-700",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Export Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in exporting high-quality natural products that meet international standards 
            and serve diverse global markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className={`${product.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;