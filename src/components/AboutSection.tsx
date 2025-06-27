import { Award, Shield, Truck, Users } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Global Clients" },
    { icon: Truck, number: "50+", label: "Countries Served" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Shield, number: "100%", label: "Quality Assured" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              About GlobalTrade
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in international trade, GlobalTrade has established 
              itself as a leading exporter of premium natural products. We pride ourselves on 
              maintaining the highest quality standards while building lasting partnerships worldwide.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to sustainability, quality, and customer satisfaction has made us 
              the preferred choice for businesses seeking reliable export partners in the natural 
              products industry.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-400 to-blue-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                      <p className="text-gray-600">Rigorous quality control at every stage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Global Network</h4>
                      <p className="text-gray-600">Extensive international partnerships</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sustainable Sourcing</h4>
                      <p className="text-gray-600">Environmentally responsible practices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Timely Delivery</h4>
                      <p className="text-gray-600">Reliable logistics and shipping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;