
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BuildingEstimation, formatCurrency, formatNumber } from "@/utils/calculations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell
} from "recharts";
import { FileText } from "lucide-react";
import { MaterialPricing } from "@/types/pricingTypes";

interface BuildingEstimationResultProps {
  estimation: BuildingEstimation;
}

const COLORS = ["#0284c7", "#0369a1", "#075985", "#0c4a6e"];

const BuildingEstimationResult: React.FC<BuildingEstimationResultProps> = ({
  estimation,
}) => {
  const phaseData = estimation.phases.map((phase) => ({
    name: phase.name,
    value: phase.cost,
  }));

  const handleExportPDF = () => {
    alert("PDF export functionality would be implemented here");
  };

  const handleEmailEstimate = () => {
    alert("Email functionality would be implemented here");
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Construction Cost Estimate</CardTitle>
        <CardDescription>
          Based on your specifications and current Nigerian market rates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-construct-50 p-6 rounded-lg text-center">
          <p className="text-gray-600 mb-2">Total Estimated Cost</p>
          <h2 className="text-4xl font-bold text-construct-800">
            {formatCurrency(estimation.totalCost)}
          </h2>
          <p className="text-gray-600 mt-2">
            For {formatNumber(estimation.sizeInSqMeters)} square meters
          </p>
        </div>

        <Tabs defaultValue="summary">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Phase Breakdown</h3>
                <div className="space-y-4">
                  {estimation.phases.map((phase) => (
                    <div key={phase.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{phase.name}</span>
                        <span className="text-sm font-medium">
                          {formatCurrency(phase.cost)}
                        </span>
                      </div>
                      <Progress value={phase.percentage} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {phase.percentage.toFixed(1)}% of total
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Cost Visualization</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={phaseData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={(entry) => entry.name}
                      >
                        {phaseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-6 py-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Construction Phase Details
              </h3>
              <div className="space-y-6">
                {estimation.phases.map((phase) => (
                  <div key={phase.name} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2">
                      {phase.name}{" "}
                      <span className="text-gray-500 text-sm">
                        ({formatCurrency(phase.cost)})
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {phase.percentage.toFixed(1)}% of total construction cost
                    </p>
                    <div className="h-40 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={phase.materials}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip formatter={(value) => formatCurrency(value as number)} />
                          <Bar dataKey="cost" fill="#0ea5e9" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6 py-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Material Requirements</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phase
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Material
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Unit
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cost
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>Date</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {estimation.phases.flatMap((phase) =>
                      phase.materials.map((material, index) => {
                        let lastUpdated = "";
                        try {
                          const pricingData = require("@/data/pricing").default;
                          const found = Object.values(pricingData.materials).find(
                            (m) => (m as MaterialPricing).name === material.name
                          ) as MaterialPricing | undefined;
                          lastUpdated = found?.lastUpdated ?? "";
                        } catch (err) {
                          lastUpdated = "";
                        }
                        return (
                          <tr key={`${phase.name}-${material.name}`}>
                            {index === 0 && (
                              <td
                                rowSpan={phase.materials.length}
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                {phase.name}
                              </td>
                            )}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {material.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatNumber(material.quantity)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {material.unit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatCurrency(material.cost)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-400 italic">
                              {lastUpdated ? `Price as at ${lastUpdated}` : ""}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            onClick={handleExportPDF}
            className="flex items-center gap-2"
            variant="outline"
          >
            <FileText className="h-4 w-4" />
            Export as PDF
          </Button>
          <Button
            onClick={handleEmailEstimate}
            variant="outline"
          >
            Email Estimate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuildingEstimationResult;
