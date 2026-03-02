import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import QuickAccess from "@/components/QuickAccess";
import UpcomingEvents from "@/components/UpcomingEvents";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Highlights />
      <UpcomingEvents />
      <CTASection />
    </>
  );
}