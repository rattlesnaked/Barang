import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/SideBar";
import { ProductProvider } from "./controllers/ProductContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProductProvider>
          <div className="flex flex-row min-h-screen min-w-full bg-slate-200 text-slate-950">
            <div className="flex basis-1/6 border-r border-slate-400">
              <Sidebar/>
            </div>
            <div className="grow p-4">
              {children}
            </div> 
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}
