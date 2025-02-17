import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Printer, X, Menu } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id: string) => {
    // First, handle smooth scroll to the target section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu after a small delay
    setTimeout(() => {
      toggleMobileMenu();
    }, 800); // Delay allows the scroll to complete smoothly before closing the menu
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">3Deality</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-primary transition-colors"
              onClick={() => handleScroll("home")}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors"
              onClick={() => handleScroll("services")}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
              onClick={() => handleScroll("about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <a
                  href="#home"
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => handleScroll("home")}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => handleScroll("services")}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => handleScroll("about")}
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => handleScroll("contact")}
                >
                  Contact
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
