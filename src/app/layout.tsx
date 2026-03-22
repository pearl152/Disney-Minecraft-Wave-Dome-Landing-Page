import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minecraft Wave Dome at Aulani | Disney Resort Aquatic Experience",
  description:
    "Discover the Minecraft Wave Dome — a signature indoor wave experience at Aulani, A Disney Resort & Spa. Family-friendly aquatic adventure blending Disney storytelling with Minecraft worldbuilding.",
  keywords: [
    "Minecraft Wave Dome",
    "Aulani",
    "Disney Resort",
    "Hawaii water park",
    "family vacation",
    "indoor wave pool",
  ],
  openGraph: {
    title: "Minecraft Wave Dome at Aulani | Disney Resort Aquatic Experience",
    description:
      "An immersive indoor wave experience at Aulani, A Disney Resort & Spa. Where Disney storytelling meets Minecraft worldbuilding.",
    type: "website",
    locale: "en_US",
    siteName: "Minecraft Wave Dome at Aulani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Wave Dome at Aulani | Disney Resort",
    description:
      "Family-friendly aquatic adventure blending Disney storytelling with Minecraft worldbuilding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#F8FFFE] text-[#0A1628] font-sans">{children}</body>
    </html>
  );
}
