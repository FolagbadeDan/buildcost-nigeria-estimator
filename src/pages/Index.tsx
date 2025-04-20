
import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ProjectTypeSelector from "@/components/ProjectTypeSelector";
import BuildingCalculator from "@/components/BuildingCalculator";
import FencingCalculator from "@/components/FencingCalculator";

const Index = () => {
  const [projectType, setProjectType] = useState<"building" | "fencing" | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <div id="calculator" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Construction Cost
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select your project type to get started with your cost estimation
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <ProjectTypeSelector 
                selectedType={projectType}
                onChange={setProjectType}
              />
            </div>

            {projectType && (
              <div className="max-w-4xl mx-auto">
                {projectType === "building" ? (
                  <BuildingCalculator />
                ) : (
                  <FencingCalculator />
                )}
              </div>
            )}
          </div>
        </div>

        <div id="about" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About BuildCostNG
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                BuildCostNG was created to provide Nigerians with accurate, up-to-date construction cost estimates. Our goal is to help homeowners, property developers, and contractors plan their projects with confidence by providing reliable cost information based on current Nigerian market rates.
              </p>
              <p className="text-lg text-gray-600">
                Our estimation engine uses data collected from construction professionals across Nigeria, regularly updated to reflect current material prices, labor costs, and regional variations.
              </p>
            </div>
          </div>
        </div>

        <div id="contact" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about BuildCostNG or need custom estimation services? Contact our team for assistance.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p className="text-gray-600 mb-2">Email: info@buildcostng.com</p>
                    <p className="text-gray-600 mb-2">Phone: +234 800 123 4567</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                    <p className="text-gray-600 mb-2">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
