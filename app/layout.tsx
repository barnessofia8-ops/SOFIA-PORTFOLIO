import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sofia Barnes | Shopify Virtual Assistant",
  description: "Thoughtful Shopify virtual assistance for organised store operations, customer support and e-commerce administration.",
  metadataBase: new URL("https://example.com")
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
