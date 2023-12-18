import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients - Quercus Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
