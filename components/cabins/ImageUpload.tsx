"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { UploadButton } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import type { UploadFileResponse } from "@/types/uploadthing";

interface ImageUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  onRemove: (url: string) => void;
}

export function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative aspect-square rounded-lg border overflow-hidden"
          >
            <Image
              src={url}
              alt="Cabin image"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => onRemove(url)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <UploadButton
        endpoint="cabinImage"
        onClientUploadComplete={(res: UploadFileResponse[]) => {
          onChange([...value, ...res.map((r) => r.url)]);
        }}
        onUploadError={(error: Error) => {
          console.error(error);
        }}
      />
    </div>
  );
}
