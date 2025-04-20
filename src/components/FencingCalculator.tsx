
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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fenceTypes, gateOptions, securityFeatures } from "@/data/fencingTypes";
import { locations } from "@/data/locations";
import { qualityLevels } from "@/data/qualityLevels";
import { FencingEstimation, calculateFencingEstimation, calculatePerimeter } from "@/utils/calculations";
import FencingEstimationResult from "./FencingEstimationResult";

const FencingCalculatorSchema = z.object({
  fenceTypeId: z.string(),
  locationId: z.string(),
  qualityLevelId: z.string(),
  inputMethod: z.enum(["dimensions", "perimeter"]),
  length: z.number().min(1).optional(),
  width: z.number().min(1).optional(),
  perimeter: z.number().min(1).optional(),
  height: z.number().min(1),
  cornerPosts: z.number().min(0),
  gates: z.array(
    z.object({
      optionId: z.string(),
      quantity: z.number().min(0),
    })
  ),
  securityFeatureIds: z.array(z.string()),
});

type FencingCalculatorValues = z.infer<typeof FencingCalculatorSchema>;

const FencingCalculator: React.FC = () => {
  const [estimation, setEstimation] = useState<FencingEstimation | null>(null);

  const form = useForm<FencingCalculatorValues>({
    resolver: zodResolver(FencingCalculatorSchema),
    defaultValues: {
      fenceTypeId: "block-wall",
      locationId: "lagos",
      qualityLevelId: "standard",
      inputMethod: "dimensions",
      length: 30,
      width: 15,
      perimeter: 90,
      height: 1.8,
      cornerPosts: 4,
      gates: gateOptions.map((option) => ({
        optionId: option.id,
        quantity: option.id === "pedestrian" ? 1 : 0,
      })),
      securityFeatureIds: [],
    },
  });

  const inputMethod = form.watch("inputMethod");

  const onSubmit = (values: FencingCalculatorValues) => {
    const fenceType = fenceTypes.find((type) => type.id === values.fenceTypeId);
    const location = locations.find((loc) => loc.id === values.locationId);
    const qualityLevel = qualityLevels.find(
      (level) => level.id === values.qualityLevelId
    );

    if (!fenceType || !location || !qualityLevel) {
      return;
    }

    // Calculate perimeter based on input method
    const perimeter =
      values.inputMethod === "dimensions" && values.length && values.width
        ? calculatePerimeter(values.length, values.width)
        : values.perimeter || 0;

    // Get selected gates
    const selectedGates = values.gates
      .filter((gate) => gate.quantity > 0)
      .map((gate) => {
        const option = gateOptions.find((opt) => opt.id === gate.optionId);
        return {
          option: option!,
          quantity: gate.quantity,
        };
      });

    // Get selected security features
    const selectedSecurityFeatures = securityFeatures.filter((feature) =>
      values.securityFeatureIds.includes(feature.id)
    );

    const result = calculateFencingEstimation({
      fenceType,
      location,
      qualityLevel,
      perimeter,
      height: values.height,
      gates: selectedGates,
      cornerPosts: values.cornerPosts,
      securityFeatures: selectedSecurityFeatures,
    });

    setEstimation(result);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Fencing Cost Calculator</CardTitle>
          <CardDescription>
            Estimate costs for perimeter fencing projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fenceTypeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fence Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select fence type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fenceTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select the type of fence you want to build
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
                name="inputMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input Method</FormLabel>
                    <div className="flex gap-4">
                      <Tabs
                        value={field.value}
                        onValueChange={(value) =>
                          field.onChange(value as "dimensions" | "perimeter")
                        }
                        className="w-full"
                      >
                        <TabsList className="grid grid-cols-2 w-full">
                          <TabsTrigger value="dimensions">
                            Land Dimensions
                          </TabsTrigger>
                          <TabsTrigger value="perimeter">
                            Total Perimeter
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <FormDescription>
                      Choose how you want to input your land measurements
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {inputMethod === "dimensions" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Length (meters)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the length of your land
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="width"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Width (meters)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the width of your land
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ) : (
                <FormField
                  control={form.control}
                  name="perimeter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Perimeter (meters)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Enter the total perimeter of your land
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fence Height (meters)</FormLabel>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1.2m</span>
                        <span>1.8m</span>
                        <span>2.4m</span>
                        <span>3.0m</span>
                      </div>
                      <FormControl>
                        <Slider
                          min={1.2}
                          max={3.0}
                          step={0.3}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                        />
                      </FormControl>
                      <div className="text-center font-medium">
                        {field.value.toFixed(1)} meters
                      </div>
                    </div>
                    <FormDescription>
                      Select the height of your fence
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cornerPosts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Corner Posts</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the number of corners in your fence (typically 4 for
                      rectangular land)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <h3 className="text-base font-medium mb-2">Gate Options</h3>
                <div className="space-y-4">
                  {gateOptions.map((option, index) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name={`gates.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex justify-between items-center">
                            <div>
                              <FormLabel>{option.name}</FormLabel>
                              <FormDescription>
                                {option.description}
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                type="number"
                                min={0}
                                className="w-20"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(parseInt(e.target.value))
                                }
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">
                  Security Features
                </h3>
                <div className="space-y-4">
                  {securityFeatures.map((feature) => (
                    <FormField
                      key={feature.id}
                      control={form.control}
                      name="securityFeatureIds"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(feature.id)}
                              onCheckedChange={(checked) => {
                                const updatedFeatures = checked
                                  ? [...field.value, feature.id]
                                  : field.value.filter(
                                      (id) => id !== feature.id
                                    );
                                field.onChange(updatedFeatures);
                              }}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-medium leading-none">
                              {feature.name}
                            </FormLabel>
                            <FormDescription className="text-xs">
                              {feature.description}
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full">
                Calculate Estimate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {estimation && <FencingEstimationResult estimation={estimation} />}
    </div>
  );
};

export default FencingCalculator;
