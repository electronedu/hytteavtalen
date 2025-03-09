import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { CabinForm } from "@/components/cabins/CabinForm";
import { Plus } from "lucide-react";

export default async function CabinsPage() {
  const supabase = createServerComponentClient({ cookies });

  const { data: cabins } = await supabase
    .from("cabins")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Mine hytter</h1>
        <Button asChild>
          <Link href="/dashboard/cabins/new" className="gap-2">
            <Plus className="h-4 w-4" />
            Legg til hytte
          </Link>
        </Button>
      </div>

      {cabins?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            Du har ikke registrert noen hytter ennå.
          </p>
          <Button asChild>
            <Link href="/dashboard/cabins/new">Registrer din første hytte</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cabins?.map((cabin) => (
            <Link
              key={cabin.id}
              href={`/dashboard/cabins/${cabin.id}`}
              className="block group"
            >
              <div className="rounded-lg border bg-card overflow-hidden transition-colors hover:border-primary">
                {cabin.images[0] && (
                  <div className="aspect-video relative">
                    <img
                      src={cabin.images[0]}
                      alt={cabin.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {cabin.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cabin.location.address}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
