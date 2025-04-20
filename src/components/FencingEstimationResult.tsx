
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FencingEstimation, formatCurrency, formatNumber } from "@/utils/calculations";
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

interface FencingEstimationResultProps {
  estimation: FencingEstimation;
}

const COLORS = ["#0284c7", "#0369a1", "#075985", "#0c4a6e", "#ea580c", "#9a3412"];

const FencingEstimationResult: React.FC<FencingEstimationResultProps> = ({
  estimation,
}) => {
  // Prepare data for pie chart
  const costBreakdown = [
    {
      name: "Fence",
      value: estimation.adjustedFenceCost,
    },
    {
      name: "Gates",
      value: estimation.gatesCost,
    },
    {
      name: "Security Features",
      value: estimation.securityFeaturesCost,
    },
  ];

  // Function to handle the export of the PDF
  const handleExportPDF = () => {
    // This would be implemented with a PDF generation library
    alert("PDF export functionality would be implemented here");
  };

  // Function to handle sending the estimate via email
  const handleEmailEstimate = () => {
    // This would be implemented with an email service
    alert("Email functionality would be implemented here");
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Fencing Cost Estimate</CardTitle>
        <CardDescription>
          Based on your specifications and current Nigerian market rates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-orange-50 p-6 rounded-lg text-center">
          <p className="text-gray-600 mb-2">Total Estimated Cost</p>
          <h2 className="text-4xl font-bold text-orange-800">
            {formatCurrency(estimation.totalCost)}
          </h2>
          <p className="text-gray-600 mt-2">
            For {formatNumber(estimation.perimeter)} meters of fencing at{" "}
            {formatCurrency(estimation.costPerMeter)} per meter
          </p>
        </div>

        <Tabs defaultValue="summary">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="extras">Gates & Security</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Cost Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Fence Structure</span>
                    <span className="font-medium">
                      {formatCurrency(estimation.adjustedFenceCost)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Gates</span>
                    <span className="font-medium">
                      {formatCurrency(estimation.gatesCost)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Security Features</span>
                    <span className="font-medium">
                      {formatCurrency(estimation.securityFeaturesCost)}
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between mb-1">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      {formatCurrency(estimation.totalCost)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Cost Visualization
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={costBreakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={(entry) => entry.name}
                      >
                        {costBreakdown.map((entry, index) => (
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

          <TabsContent value="materials" className="space-y-6 py-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Material Requirements
              </h3>
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={estimation.materials}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                    <Legend />
                    <Bar dataKey="cost" fill="#f97316" name="Cost" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Material
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Unit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {estimation.materials.map((material) => (
                      <tr key={material.name}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extras" className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Gates</h3>
                {estimation.gates.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Gate Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {estimation.gates.map((gate) => (
                        <tr key={gate.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {gate.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {gate.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(gate.cost)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Total
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {estimation.gates.reduce(
                            (sum, gate) => sum + gate.quantity,
                            0
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatCurrency(estimation.gatesCost)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-500">No gates specified</p>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Security Features
                </h3>
                {estimation.securityFeatures.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {estimation.securityFeatures.map((feature) => (
                        <tr key={feature.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(feature.cost)}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Total
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {formatCurrency(estimation.securityFeaturesCost)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-500">No security features selected</p>
                )}
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

export default FencingEstimationResult;
