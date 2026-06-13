import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Audience from "./sections/Audience";
import Services from "./sections/Services";
import Process from "./sections/Process";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";
import Market from "./sections/Market";
import Footer from "./sections/Footer";
import WhatsappFAB from "./components/WhatsappFAB";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main>
        <Hero />
        <Contact />
        <Audience />
        <Market />
        <Services />
        <Process />
        <WhyUs />
      </main>

      <Footer />
      <WhatsappFAB />
    </>
  );
}

export default App;
