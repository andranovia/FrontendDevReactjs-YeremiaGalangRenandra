import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/utils/ReactQueryProvider";
import { RestaurantFilterProvider } from "@/context/RestaurantFilterContext";
import { UserContextProvider } from "@/context/UserContext";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FoodFinder",
  description: "Search your taste around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReactQueryProvider>
          <UserContextProvider>
            <RestaurantFilterProvider>{children}</RestaurantFilterProvider>
          </UserContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
