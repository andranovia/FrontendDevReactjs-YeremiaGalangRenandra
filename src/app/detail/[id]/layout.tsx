import Header from "@/components/Header";
import type { Metadata } from "next";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
