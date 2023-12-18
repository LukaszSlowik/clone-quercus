import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Model Vendor - Quercus Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
