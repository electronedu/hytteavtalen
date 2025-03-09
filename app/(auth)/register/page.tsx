import { AuthForm } from "@/components/auth/AuthForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold text-center mb-8">
        Registrer deg på Hytteavtalen
      </h1>

      <Tabs defaultValue="owner" className="space-y-6">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="owner">Hytteeier</TabsTrigger>
          <TabsTrigger value="renter">Leietaker</TabsTrigger>
        </TabsList>

        <TabsContent value="owner">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Registrer deg som hytteeier for å leie ut din hytte og få
              skattefradrag.
            </p>
            <AuthForm type="register" userRole="owner" />
          </div>
        </TabsContent>

        <TabsContent value="renter">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Registrer deg som leietaker for å få tilgang til rimelige hytter.
            </p>
            <AuthForm type="register" userRole="renter" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
