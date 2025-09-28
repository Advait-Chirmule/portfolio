import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Advait Chirmule | Full Stack AI Developer",
  description:
    "Full stack AI developer focused on secure cloud platforms, research-driven insights, and production-grade experiences.",
  openGraph: {
    title: "Advait Chirmule | Full Stack AI Developer",
    description:
      "Portfolio showcasing security automation, large-scale research, and full stack product delivery across AWS and Azure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "AdvaitPortfolio", "version": "1.0.0"}'
        />
        <Header />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}