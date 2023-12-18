import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Quercus Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
