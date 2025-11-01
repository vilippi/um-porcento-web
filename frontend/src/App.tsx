import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
