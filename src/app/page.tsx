import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import ProgramsShowcase from "@/components/sections/ProgramsShowcase";
import ImpactStats from "@/components/sections/ImpactStats";
import EventsPreview from "@/components/sections/EventsPreview";
import Testimonials from "@/components/sections/Testimonials";
import { DonateCTA } from "@/components/sections/CTASections";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ProgramsShowcase />
      <ImpactStats />
      <EventsPreview />
      <Testimonials />
      <DonateCTA />
      <BlogPreview />
    </>
  );
}
