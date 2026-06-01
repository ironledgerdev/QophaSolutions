import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">QS</span>
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">Qopha</div>
              <div className="text-xs text-gray-600">Solutions</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#values">Values</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <Link 
            to="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">QS</span>
              </div>
              <div>
                <div className="font-bold text-lg">Qopha</div>
                <div className="text-xs text-gray-400">Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Real Impact Solutions for Sustainable Transformation. A B-BBEE Level one black woman owned training and consultancy firm specialising in skills development and end-to-end project management services.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm">SERVICES</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Skills Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Enterprise Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Supplier Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Socio-Economic Dev</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">COMPANY</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#values" className="hover:text-primary transition-colors">Our Values</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Address</p>
                <p className="text-gray-400">33 Ballyclare Drive, Ballywoods Office Park, Cedarwood House, Bryanston, Gauteng 2191</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">084 417 4305</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Email</p>
                <p className="text-gray-400">info@qophasolutions.co.za</p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Qopha Solutions. All rights reserved. | Company Reg: 2016/172461/07</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
