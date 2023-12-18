import type { Metadata } from "next";
import { Inter, Rubik, Roboto } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

//const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({
  subsets: ["latin"],
  display: "block",
  variable: "--font-rubik",
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "block",
  weight: ["100", "300", "400", "900", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Home Page - Quercus Clone",
  description:
    "Page created using Next.js and react as an alement of the recruitment process for Quercus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/cropped-favico-32x32.png" sizes="any" />
      </head>
      <body className={`${roboto.variable} ${rubik.variable} font-rubik`}>
        <div className="overflow-x-hidden">
          <Header />
          <div className="h-[80px]"></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
