import { useEffect } from "react";
import Head from "next/head";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CompanyShowcase } from "@/components/CompanyShowcase";
import { Navbar } from "@/components/Navbar";
import Contact from "../components/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>3Deality - High-Quality 3D Printing & Rapid Prototyping Services</title>
        <meta name="description" content="Get top-quality 3D printing and rapid prototyping services with precision and fast turnaround. Upload your design and bring your ideas to life with 3Deality." />
        <meta name="keywords" content="3D printing, rapid prototyping, custom 3D prints, industrial 3D printing, CAD design, 3D modeling, additive manufacturing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="3Deality|High-Quality 3D Printing & Prototyping" />
        <meta property="og:description" content="Upload your design and get high-quality 3D prints with precision and fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.3deality.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </>
  );
};

export default Index;
