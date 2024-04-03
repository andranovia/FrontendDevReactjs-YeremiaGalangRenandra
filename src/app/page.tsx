import Index from "@/components/Index";
import Navigation from "@/components/Navigation";
import RestaurantList from "@/components/RestaurantList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 lg:p-24">
      <Index />
      <Navigation />
      <RestaurantList />
    </main>
  );
}
