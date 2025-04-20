
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Precise Construction Cost <span className="text-construct-600">Estimates</span> for Nigeria
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          BuildCostNG helps you accurately estimate the cost of building residential properties and fencing projects in Nigeria based on current material and labor prices.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-construct-600 hover:bg-construct-700"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Estimating
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-construct-600 text-construct-600 hover:bg-construct-50"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
