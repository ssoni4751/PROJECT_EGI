import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-geist-sans", // overriding variable names for simplicity
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Anshu Computer and Tax Consultancy | Premium PF & Tax Advisory",
  description: "Expert Provident Fund (PF) dispute resolutions, methodical Income Tax Return (ITR) filing, structured GST processing, and secure digital compliance solutions serving clients nationwide.",
  keywords: "PF Consultant, GST Filing, Tax Consultant India, ITR Filing, Kaushal Market Orai, Anshu Computer, Digital Life Certificate, Nationwide Tax Advisor",
  openGraph: {
    title: "Anshu Computer and Tax Consultancy",
    description: "Expert Provident Fund (PF) dispute resolutions, methodical Income Tax Return (ITR) filing, and GST processing.",
    url: "https://anshu-computer-and-tax-consultants.onrender.com",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} antialiased min-h-screen bg-mesh-premium bg-dots text-slate-800`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
