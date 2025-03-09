"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  MessageSquare,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { useSupabase } from "@/components/providers/supabase-provider";

export function DashboardNav() {
  const pathname = usePathname();
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const links = [
    {
      href: "/dashboard",
      label: "Oversikt",
      icon: Home,
    },
    {
      href: "/dashboard/bookings",
      label: "Bookinger",
      icon: Calendar,
    },
    {
      href: "/dashboard/messages",
      label: "Meldinger",
      icon: MessageSquare,
    },
    {
      href: "/dashboard/contracts",
      label: "Kontrakter",
      icon: FileText,
    },
    {
      href: "/dashboard/settings",
      label: "Innstillinger",
      icon: Settings,
    },
  ];

  return (
    <nav className="w-64 border-r h-screen p-4 flex flex-col">
      <div className="flex-1 space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === href && "bg-accent text-accent-foreground"
            )}
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full justify-start gap-2"
        onClick={handleSignOut}
      >
        <LogOut className="h-5 w-5" />
        Logg ut
      </Button>
    </nav>
  );
}
