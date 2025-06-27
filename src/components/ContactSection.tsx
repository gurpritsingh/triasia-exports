import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your export journey? Contact us today to discuss your requirements 
            and discover how we can serve your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center">
                  <MapPin className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-gray-300">Tagore garden, New Delhi</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center">
                  <Mail className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">triasiaglobal@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;