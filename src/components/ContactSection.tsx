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
                    <p className="text-gray-300">123 Export Plaza, Trade District, Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center">
                  <Phone className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center">
                  <Mail className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@globaltrade.com</p>
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
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  /> */}
                </div>
                
                {/* <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
                
                <Input 
                  placeholder="Company Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                />
                
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={5}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 resize-none"
                /> */}
                
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white py-6 text-lg group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;