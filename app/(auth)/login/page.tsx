import Link from "next/link";
import { AuthForm } from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto py-16">
      <h1 className="text-2xl font-bold text-center mb-8">
        Logg inn på Hytteavtalen
      </h1>

      <div className="space-y-4">
        <AuthForm type="login" />

        <p className="text-center text-sm text-muted-foreground">
          Har du ikke en konto?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Registrer deg her
          </Link>
        </p>
      </div>
    </div>
  );
}
