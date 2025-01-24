import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionSection";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import { Suspense } from "react";
import LoadingPage from "./components/Loading";

export default function Home() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="font-satoshi">
        <HeroSection />
        <CollectionsSection />
        <AboutSection />
        <Footer />
      </div>
    </Suspense>
  );
}
