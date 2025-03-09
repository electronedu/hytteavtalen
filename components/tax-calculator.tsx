"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calculator, Info } from "lucide-react";

interface TaxCalculationResult {
  daysRented: number;
  taxCut: number;
  percentage: number;
}

export interface TaxCalculatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxDays?: number;
  defaultDays?: number;
  taxRate?: number;
  containerClassName?: string;
}

export function TaxCalculator({
  maxDays = 150,
  defaultDays = 30,
  taxRate = 0.22,
  className,
  containerClassName,
  ...props
}: TaxCalculatorProps) {
  const [daysRented, setDaysRented] = React.useState<number>(defaultDays);
  const [result, setResult] = React.useState<TaxCalculationResult | null>(null);

  const calculateTaxCut = React.useCallback(() => {
    // Simple calculation model for Hytteavtalen tax cut
    // The more days rented, the higher percentage of tax cut
    const baseAmount = 10000; // Base amount in NOK
    const maxPercentage = 85; // Maximum percentage of tax cut

    // Calculate percentage based on days rented (increases with more days)
    const percentage = Math.min(
      Math.round((daysRented / maxDays) * 100),
      maxPercentage
    );

    // Calculate tax cut amount
    const taxCut = Math.round((baseAmount * percentage * taxRate) / 100);

    setResult({
      daysRented,
      taxCut,
      percentage,
    });
  }, [daysRented, maxDays, taxRate]);

  return (
    <section
      className={cn(
        "bg-background text-foreground rounded-xl border border-border",
        "overflow-hidden",
        containerClassName
      )}
      {...props}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">
            Hytteavtalen Skattekalkulator
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="days-slider" className="text-sm font-medium">
                Utleiedager per år
              </label>
              <span className="text-2xl font-bold">{daysRented}</span>
            </div>

            <Slider
              id="days-slider"
              min={0}
              max={maxDays}
              step={1}
              value={[daysRented]}
              onValueChange={(value) => setDaysRented(value[0])}
              className="py-4"
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 dager</span>
              <span>{maxDays} dager</span>
            </div>
          </div>

          <Button onClick={calculateTaxCut} className="w-full" size="lg">
            Beregn skattefradrag
          </Button>

          {result && (
            <div className="mt-6 p-4 rounded-lg bg-muted">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm">Estimert skattefradrag:</span>
                  <span className="text-2xl font-bold text-primary">
                    {new Intl.NumberFormat("no-NO", {
                      style: "currency",
                      currency: "NOK",
                    }).format(result.taxCut)}
                  </span>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-muted-foreground">
                        Effektivitet: {result.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-muted-foreground/20">
                    <div
                      style={{ width: `${result.percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    ></div>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <p>
                    Ved å leie ut hytta di i {result.daysRented} dager per år
                    gjennom Hytteavtalen, kan du motta opptil{" "}
                    {new Intl.NumberFormat("no-NO", {
                      style: "currency",
                      currency: "NOK",
                    }).format(result.taxCut)}{" "}
                    i skattefradrag.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
