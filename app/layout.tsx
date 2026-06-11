import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

export const metadata: Metadata = {
  title: "felilir — Graphic Designer & Motion Specialist",
  description:
    "Felipe Lira is a graphic designer and motion graphics specialist based in Concepción, Chile. 8+ years crafting brand identities, motion graphics, and digital experiences for companies across Latin America.",
  keywords: [
    "graphic designer",
    "motion graphics",
    "brand identity",
    "Concepción",
    "Chile",
    "freelance designer",
    "motion specialist",
  ],
  authors: [{ name: "Felipe Lira" }],
  openGraph: {
    title: "felilir — Graphic Designer & Motion Specialist",
    description:
      "8+ years crafting brand identities, motion graphics, and digital experiences for companies across Latin America.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
