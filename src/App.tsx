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
import NotFound from "./pages/NotFound";

function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === basePath ||
    window.location.pathname === `${basePath}/`;

  if (!isHomePage) {
    return <NotFound />;
  }

  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main>
        <Hero />
        <Contact />
        <Services />
        <WhyUs />
        <Process />
        <Audience />
        <Market />
      </main>

      <Footer />
      <WhatsappFAB />
    </>
  );
}

export default App;
