
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { House, ScanBarcode } from "lucide-react";

interface ProjectTypeSelectorProps {
  selectedType: "building" | "fencing" | null;
  onChange: (type: "building" | "fencing") => void;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({
  selectedType,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        className={`cursor-pointer transition-all ${
          selectedType === "building"
            ? "ring-2 ring-construct-500 bg-construct-50"
            : "hover:bg-gray-50"
        }`}
        onClick={() => onChange("building")}
      >
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="bg-construct-100 p-3 rounded-full mb-4">
            <House className="h-8 w-8 text-construct-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Building Project</h3>
          <p className="text-gray-500 text-center">
            Estimate costs for residential buildings such as bungalows and duplexes
          </p>
        </CardContent>
      </Card>

      <Card
        className={`cursor-pointer transition-all ${
          selectedType === "fencing"
            ? "ring-2 ring-construct-500 bg-construct-50"
            : "hover:bg-gray-50"
        }`}
        onClick={() => onChange("fencing")}
      >
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="bg-orange-100 p-3 rounded-full mb-4">
            <ScanBarcode className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fencing Project</h3>
          <p className="text-gray-500 text-center">
            Calculate costs for perimeter fencing with various specifications
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectTypeSelector;
