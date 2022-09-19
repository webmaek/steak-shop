import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full grid grid-cols-12">
      <main className="col-span-11">
        <Hero />
        {children}
        <Footer />
      </main>

      <header className="fixed w-[150px] top-0 right-0 bottom-0 col-span-1 bg-white py-6">
        <div className="relative w-full flex items-center justify-center">
          <Image src="/logo.png" alt="Brand Logo" width={80} height={80} />
        </div>

        <Navbar />
      </header>
    </div>
  );
}
