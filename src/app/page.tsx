import { auth } from "@clerk/nextjs/server";
import ContentSection from "@/components/Home/ContentSection";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import SkillsSection from "@/components/Home/SkillsSection";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="h-full w-full bg-black text-white">
      <Header />
      <HeroSection />
      <ContentSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
