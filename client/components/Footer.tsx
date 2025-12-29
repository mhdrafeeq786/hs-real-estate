import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-11 bg-white" />
              <div>
                <div className="text-lg font-bold text-red-600">HOMESNIPER</div>
                <div className="text-xs text-gray-400">REAL ESTATE</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Leading real estate management and leasing services across Abu
              Dhabi, Al Ain, and Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-400 hover:text-red-600"
                >
                  Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Property Leasing</li>
              <li>Property Management</li>
              <li>Maintenance Services</li>
              <li>Tenant Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@home-sniper.com"
                  className="text-gray-400 hover:text-red-600"
                >
                  info@home-sniper.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Multiple locations in UAE
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+971 50 737 9111</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2024 Home Sniper Real Estate. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1Fj3TEsMoH/?mibextid=wwXIfr"
              target="_blank"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/homesniper_realestates?igsh=ZzF1NGd2dnlzMTUy"
              target="_blank"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
