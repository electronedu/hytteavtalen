"use client";

import * as React from "react";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
    category?: string;
  }[];
  contactInfo?: {
    title: string;
    description?: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3 text-foreground">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="max-w-2xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={cn(
                    "mb-4 rounded-lg",
                    "bg-card text-card-foreground",
                    "border border-border/60",
                    "shadow-sm"
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "px-6 py-4 text-left hover:no-underline",
                      "data-[state=open]:border-b data-[state=open]:border-border/60"
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      {item.category && (
                        <Badge
                          variant="secondary"
                          className="w-fit text-xs font-normal"
                        >
                          {item.category}
                        </Badge>
                      )}
                      <h3 className="text-base font-medium text-foreground">
                        {item.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <div className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">
                {contactInfo.title}
              </p>
              {contactInfo.description && (
                <p className="text-xs text-muted-foreground mb-4">
                  {contactInfo.description}
                </p>
              )}
              <Button size="sm" onClick={contactInfo.onContact}>
                {contactInfo.buttonText}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

export { FaqSection };
