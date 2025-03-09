import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SupabaseProvider from "@/components/providers/supabase-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hytteavtalen - Lei ut hytta di, få skattefradrag",
  description:
    "Få opptil 6% skattefradrag på din personlige inntekt ved å leie ut hytta til kvalifiserte leietakere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
