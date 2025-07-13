import { Globe, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-emerald-400 mr-3" />
              <span className="text-2xl font-bold">Triasiaglobal</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner in exporting premium natural products
              worldwide. Quality, reliability, and excellence in every shipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Premium Oils</li>
              <li className="text-gray-400">Herbal Products</li>
              <li className="text-gray-400">Cotton Products</li>
              <li className="text-gray-400">Natural Extracts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-sm">+91 9958 403494</span>
              </div>
              <div className="flex items-center text-gray-400">
                <a className="flex" href="mailto:triasiaglobal@gmail.com">
                  <Mail className="w-4 h-4 mr-3 text-emerald-400" />
                  <span className="text-sm">triasiaglobal@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Triasiaglobal. All rights reserved. | Exporting Excellence
            Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
