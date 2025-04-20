
import { House } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <House className="h-6 w-6 text-construct-600" />
          <h1 className="text-2xl font-bold text-gray-900">BuildCostNG</h1>
        </div>
        <div className="flex gap-4">
          <a href="#about" className="text-gray-600 hover:text-construct-600">About</a>
          <a href="#contact" className="text-gray-600 hover:text-construct-600">Contact</a>
          <Button variant="outline" className="text-construct-600 border-construct-600 hover:bg-construct-50">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
