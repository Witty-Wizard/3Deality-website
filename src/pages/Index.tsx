
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CompanyShowcase } from "@/components/CompanyShowcase";
import { Navbar } from "@/components/Navbar";
import Contact from "./Contact";

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
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <CompanyShowcase />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
};

export default Index;
