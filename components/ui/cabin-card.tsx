import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Bed, Bath, MapPin, Calendar } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const cabinCardVariants = cva(
  "w-full relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-200 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "",
        featured: "border-primary/50",
      },
      size: {
        default: "max-w-sm",
        lg: "max-w-md",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CabinCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cabinCardVariants> {
  image: string;
  name: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  available?: boolean;
  availableFrom?: string;
  features?: string[];
}

const CabinCard = React.forwardRef<HTMLDivElement, CabinCardProps>(
  (
    {
      className,
      variant,
      size,
      image,
      name,
      location,
      bedrooms,
      bathrooms,
      available = true,
      availableFrom,
      features = [],
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cabinCardVariants({ variant, size, className }))}
        {...props}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!available && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Badge
                variant="destructive"
                className="text-sm font-medium px-3 py-1"
              >
                Ikke tilgjengelig
              </Badge>
            </div>
          )}
          {available && availableFrom && (
            <Badge className="absolute bottom-2 right-2 bg-primary text-primary-foreground">
              Tilgjengelig fra {availableFrom}
            </Badge>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
            {available && !availableFrom && (
              <Badge
                variant="outline"
                className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
              >
                Tilgjengelig
              </Badge>
            )}
          </div>

          <div className="mb-3 flex items-center text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="flex items-center text-foreground">
              <Bed className="mr-1 h-4 w-4" />
              <span className="text-sm">
                {bedrooms} {bedrooms === 1 ? "Soverom" : "Soverom"}
              </span>
            </div>
            <div className="flex items-center text-foreground">
              <Bath className="mr-1 h-4 w-4" />
              <span className="text-sm">
                {bathrooms} {bathrooms === 1 ? "Bad" : "Bad"}
              </span>
            </div>
          </div>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

CabinCard.displayName = "CabinCard";

export { CabinCard, cabinCardVariants };
