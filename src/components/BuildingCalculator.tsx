
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { buildingTypes } from "@/data/buildingTypes";
import { locations } from "@/data/locations";
import { qualityLevels } from "@/data/qualityLevels";
import { BuildingEstimation, calculateBuildingEstimation, formatCurrency } from "@/utils/calculations";
import BuildingEstimationResult from "./BuildingEstimationResult";

const BuildingCalculatorSchema = z.object({
  buildingTypeId: z.string(),
  locationId: z.string(),
  qualityLevelId: z.string(),
  sizeAdjustment: z.number().min(0.8).max(1.5),
});

type BuildingCalculatorValues = z.infer<typeof BuildingCalculatorSchema>;

const BuildingCalculator: React.FC = () => {
  const [estimation, setEstimation] = useState<BuildingEstimation | null>(null);

  const form = useForm<BuildingCalculatorValues>({
    resolver: zodResolver(BuildingCalculatorSchema),
    defaultValues: {
      buildingTypeId: "3-bedroom-bungalow",
      locationId: "lagos",
      qualityLevelId: "standard",
      sizeAdjustment: 1,
    },
  });

  const onSubmit = (values: BuildingCalculatorValues) => {
    const buildingType = buildingTypes.find(
      (type) => type.id === values.buildingTypeId
    );
    const location = locations.find((loc) => loc.id === values.locationId);
    const qualityLevel = qualityLevels.find(
      (level) => level.id === values.qualityLevelId
    );

    if (!buildingType || !location || !qualityLevel) {
      return;
    }

    const result = calculateBuildingEstimation({
      buildingType,
      location,
      qualityLevel,
      sizeAdjustment: values.sizeAdjustment,
    });

    setEstimation(result);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Building Cost Calculator</CardTitle>
          <CardDescription>
            Estimate construction costs for residential buildings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="buildingTypeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select building type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {buildingTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the type of building you want to construct
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="locationId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the construction location
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualityLevelId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quality Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select quality level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {qualityLevels.map((level) => (
                          <SelectItem key={level.id} value={level.id}>
                            {level.name} - {level.description}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select desired quality of materials and finishes
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sizeAdjustment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size Adjustment</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        <Slider
                          min={0.8}
                          max={1.5}
                          step={0.05}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                        <div className="flex justify-between">
                          <span>-20%</span>
                          <span className="font-medium">
                            {(field.value * 100 - 100).toFixed(0)}%
                          </span>
                          <span>+50%</span>
                        </div>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Adjust the size of your building relative to the standard
                      dimensions
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Calculate Estimate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {estimation && <BuildingEstimationResult estimation={estimation} />}
    </div>
  );
};

export default BuildingCalculator;
