import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
