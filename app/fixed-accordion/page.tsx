"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FixedAccordionPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Fixed Accordion Page</h1>

      <div className="mb-8">
        <p className="text-muted-foreground mb-4">
          This page demonstrates the fixed accordion component that now works
          correctly with the installed dependencies.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-10 p-4 border rounded-md">
        <h2 className="text-xl font-bold mb-4">Solution Explanation</h2>
        <p className="mb-4">
          The issue was that the required dependencies were missing. We fixed it
          by:
        </p>

        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Installing the missing dependencies with{" "}
            <code>
              npm install @radix-ui/react-accordion @radix-ui/react-popover
              @radix-ui/react-slider date-fns framer-motion react-day-picker
              --force
            </code>
          </li>
          <li>
            Using the proper Radix UI components in our accordion.tsx file
          </li>
          <li>Using single quotes consistently throughout the codebase</li>
        </ol>
      </div>
    </div>
  );
}
