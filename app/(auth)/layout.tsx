import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Hytteavtalen logo"
              width={32}
              height={32}
              className="dark:invert"
            />
            <span className="font-semibold text-lg">Hytteavtalen</span>
          </Link>
        </div>
      </header>

      {children}
    </div>
  );
}
