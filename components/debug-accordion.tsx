"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export function DebugAccordion() {
  const [error, setError] = React.useState<string | null>(null);
  const [info, setInfo] = React.useState<Record<string, any>>({});

  React.useEffect(() => {
    try {
      // Check React version
      setInfo((prev: Record<string, any>) => ({
        ...prev,
        reactVersion: React.version,
      }));

      // Check AccordionPrimitive
      const primitiveKeys = Object.keys(AccordionPrimitive);
      setInfo((prev: Record<string, any>) => ({ ...prev, primitiveKeys }));

      // Check if Root exists
      const hasRoot = !!AccordionPrimitive.Root;
      setInfo((prev: Record<string, any>) => ({ ...prev, hasRoot }));

      // Check if Item exists
      const hasItem = !!AccordionPrimitive.Item;
      setInfo((prev: Record<string, any>) => ({ ...prev, hasItem }));

      // Check if Trigger exists
      const hasTrigger = !!AccordionPrimitive.Trigger;
      setInfo((prev: Record<string, any>) => ({ ...prev, hasTrigger }));

      // Check if Content exists
      const hasContent = !!AccordionPrimitive.Content;
      setInfo((prev: Record<string, any>) => ({ ...prev, hasContent }));

      // Try to create a simple accordion
      try {
        const Root = AccordionPrimitive.Root;
        const Item = AccordionPrimitive.Item;
        const Trigger = AccordionPrimitive.Trigger;
        const Content = AccordionPrimitive.Content;

        // Just check if they're valid components
        setInfo((prev: Record<string, any>) => ({
          ...prev,
          rootType: typeof Root,
          itemType: typeof Item,
          triggerType: typeof Trigger,
          contentType: typeof Content,
        }));
      } catch (e) {
        setError(
          `Error creating components: ${
            e instanceof Error ? e.message : String(e)
          }`
        );
      }
    } catch (e) {
      setError(`Error in debug: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, []);

  return (
    <div className="p-4 border rounded-md bg-muted/20">
      <h2 className="text-xl font-bold mb-4">Accordion Debug Info</h2>

      {error && (
        <div className="p-4 mb-4 bg-red-100 text-red-800 rounded-md">
          <h3 className="font-bold">Error:</h3>
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="font-semibold">Debug Information:</h3>
        <pre className="p-4 bg-muted rounded-md overflow-auto max-h-[400px]">
          {JSON.stringify(info, null, 2)}
        </pre>
      </div>
    </div>
  );
}
