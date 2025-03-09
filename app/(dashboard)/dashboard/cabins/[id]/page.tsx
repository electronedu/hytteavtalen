import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function CabinDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createServerComponentClient({ cookies });

  const { data: cabin } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!cabin) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{cabin.title}</h1>
        <Button variant="outline">Rediger hytte</Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            {cabin.images[0] && (
              <Image
                src={cabin.images[0]}
                alt={cabin.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {cabin.images.slice(1).map((image) => (
              <div
                key={image}
                className="aspect-square relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={cabin.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detaljer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Adresse</h3>
                <p className="text-muted-foreground">
                  {cabin.location.address}
                </p>
              </div>
              <div>
                <h3 className="font-medium">Pris per natt</h3>
                <p className="text-muted-foreground">
                  {cabin.price_per_night} NOK
                </p>
              </div>
              <div>
                <h3 className="font-medium">Vaskeavgift</h3>
                <p className="text-muted-foreground">
                  {cabin.cleaning_fee} NOK
                </p>
              </div>
              <div>
                <h3 className="font-medium">Beskrivelse</h3>
                <p className="text-muted-foreground">{cabin.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Utleiestatus</span>
                <span className="capitalize">{cabin.status}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
