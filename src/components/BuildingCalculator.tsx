import React, { useState, useEffect } from "react";
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
import { buildingTypeImages } from "@/utils/imageMappings";

const BuildingCalculatorSchema = z.object({
  buildingTypeId: z.string(),
  locationId: z.string(),
  qualityLevelId: z.string(),
  sizeSqMeters: z.number().min(15).max(1500),
});

type BuildingCalculatorValues = z.infer<typeof BuildingCalculatorSchema>;

const BuildingCalculator: React.FC = () => {
  const [estimation, setEstimation] = useState<BuildingEstimation | null>(null);

  const defaultBuildingType = buildingTypes[0];

  const form = useForm<BuildingCalculatorValues>({
    resolver: zodResolver(BuildingCalculatorSchema),
    defaultValues: {
      buildingTypeId: defaultBuildingType.id,
      locationId: "lagos",
      qualityLevelId: "standard",
      sizeSqMeters: defaultBuildingType.baseSqMeters,
    },
  });

  const buildingTypeId = form.watch("buildingTypeId");
  useEffect(() => {
    const selectedType = buildingTypes.find((t) => t.id === buildingTypeId);
    if (selectedType && form.getValues("sizeSqMeters") !== selectedType.baseSqMeters) {
      form.setValue("sizeSqMeters", selectedType.baseSqMeters);
    }
  }, [buildingTypeId]);

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
      sizeAdjustment: values.sizeSqMeters / buildingType.baseSqMeters,
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
                      onValueChange={(val) => {
                        field.onChange(val);
                      }}
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
                            <div className="flex items-center gap-3">
                              <img
                                src={buildingTypeImages[type.id]}
                                alt={type.name}
                                className="w-12 h-12 object-cover rounded-md border"
                              />
                              <div>
                                <div className="font-semibold">{type.name}</div>
                                <div className="text-xs text-gray-500">{type.description}</div>
                              </div>
                            </div>
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
                name="sizeSqMeters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Size (square meters)
                    </FormLabel>
                    <FormControl>
                      <input
                        type="number"
                        min={15}
                        max={1500}
                        className="w-full border rounded-md px-3 py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the total size of your building in square meters.<br/>
                      <span className="text-xs text-gray-500">
                        Standard size for selected type: {buildingTypes.find((t) => t.id === buildingTypeId)?.baseSqMeters} sqm
                      </span>
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
