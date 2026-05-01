import { Header } from "@/components/store/Header";
import { Hero } from "@/components/store/Hero";
import { Products } from "@/components/store/Products";
import { Benefits } from "@/components/store/Benefits";
import { Testimonials } from "@/components/store/Testimonials";
import { About } from "@/components/store/About";
import { Footer } from "@/components/store/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";
import { WhatsAppFloat } from "@/components/store/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
