import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import  NavBarComponet  from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    images : "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kxjPp.img?w=800&h=435&q=60&m=2&f=jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-screen w-full">
        <header>
          <NavBarComponet/>
        </header>
        <main>
           {children}
        </main>
       <footer>
        <FooterComponent/>
       </footer>
        </body>
    </html>
  );
}