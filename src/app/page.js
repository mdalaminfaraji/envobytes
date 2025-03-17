"use client";
import {
  Header,
  HeroSection,
  Services,
  Details,
  Portfolio,
  HowWeWork,
  OurTeamMembers,
  Reviews,
  FrequentlyAskedQuestions,
  Footer,
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-[#04135B]">
        <Header />
        <HeroSection />
        <Services />
      </div>
      <Details />
      <Portfolio />
      <HowWeWork />
      <Reviews />
      <OurTeamMembers />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
