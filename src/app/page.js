"use client";
import {
  Header,
  HeroSection,
  TrustedBy,
  Features,
  Solutions,
  Testimonials,
  Pricing,
  Contact,
  Footer,
  Services,
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        style={{
          backgroundImage: "url('/Envobyte/main-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <HeroSection />
        <Services />
      </div>
    </main>
  );
}
