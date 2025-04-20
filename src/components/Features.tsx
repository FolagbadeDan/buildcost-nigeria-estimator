
import { CheckCircle } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      title: "Building Cost Estimation",
      description:
        "Calculate construction costs for residential buildings like 3-bedroom bungalows and 5-bedroom duplexes.",
    },
    {
      title: "Fencing Cost Calculation",
      description:
        "Estimate costs for perimeter fencing based on dimensions, height, and security features.",
    },
    {
      title: "Location-Specific Pricing",
      description:
        "Get accurate estimates based on current material and labor costs in different Nigerian cities.",
    },
    {
      title: "Quality Level Selection",
      description:
        "Choose between economy, standard, and premium finishes to match your budget and preferences.",
    },
    {
      title: "Detailed Breakdowns",
      description:
        "View cost breakdowns by construction phase, material categories, and labor requirements.",
    },
    {
      title: "Exportable Reports",
      description:
        "Generate detailed PDF reports of your estimates that you can save or share with contractors.",
    },
  ];

  return (
    <div id="features" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BuildCostNG provides powerful tools to help you plan your construction project with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-construct-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
