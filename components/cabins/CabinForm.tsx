"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/cabins/ImageUpload";

export function CabinForm() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    price_per_night: "",
    cleaning_fee: "",
    amenities: [] as string[],
    rules: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("Not authenticated");

      const { error: insertError } = await supabase.from("cabins").insert([
        {
          owner_id: user.id,
          title: formData.title,
          description: formData.description,
          location: {
            address: formData.address,
            latitude: 0, // You might want to add a map picker for coordinates
            longitude: 0,
          },
          amenities: formData.amenities,
          images,
          price_per_night: parseFloat(formData.price_per_night),
          cleaning_fee: parseFloat(formData.cleaning_fee),
          rules: formData.rules,
          status: "pending",
        },
      ]);

      if (insertError) throw insertError;

      router.push("/dashboard/cabins");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <Alert variant="destructive">{error}</Alert>}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Tittel på hytta</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Beskrivelse</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Adresse</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price_per_night">Pris per natt (NOK)</Label>
            <Input
              id="price_per_night"
              type="number"
              min="0"
              value={formData.price_per_night}
              onChange={(e) =>
                setFormData({ ...formData, price_per_night: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cleaning_fee">Vaskeavgift (NOK)</Label>
            <Input
              id="cleaning_fee"
              type="number"
              min="0"
              value={formData.cleaning_fee}
              onChange={(e) =>
                setFormData({ ...formData, cleaning_fee: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Bilder</Label>
          <ImageUpload
            value={images}
            onChange={(urls: string[]) => setImages(urls)}
            onRemove={(url: string) =>
              setImages(images.filter((i) => i !== url))
            }
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Lagrer..." : "Registrer hytte"}
      </Button>
    </form>
  );
}
