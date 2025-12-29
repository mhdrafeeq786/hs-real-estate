import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow">{children}</main>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
