
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CompanyShowcase } from "@/components/CompanyShowcase";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Services />
      <CompanyShowcase />
    </div>
  );
};

export default Index;
