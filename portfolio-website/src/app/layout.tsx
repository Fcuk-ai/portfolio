import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gajendra Teli - Portfolio",
  description: "Data Scientist | MLOps Engineer | AI System Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-primary`}>
        <div className="flex flex-col items-center px-10">
          <div className="w-full max-w-5xl">
            <Header />
            <main className="py-5">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
