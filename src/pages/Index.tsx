import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollInvitation from "@/components/ScrollInvitation";
import CountdownTimer from "@/components/CountdownTimer";
import Envelope from "@/components/Envelope";
import ScrollSection from "@/components/ScrollSection";
import floralBg from "@/assets/2.jpg";
import greenBouquet from "@/assets/greenbouquetnew.png";
import thanksNew from "@/assets/thanksnew.png";
import FallingPetals from "@/components/FallingPetals";

const Index = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const isBottom = container.clientHeight + container.scrollTop >= container.scrollHeight - 150;
      setIsAtBottom(isBottom);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }
    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isEnvelopeOpen]);

  useEffect(() => {
    // Prevent the outer browser window/body from ever scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="h-[100svh] w-full overflow-hidden relative bg-black flex justify-center">
      {/* Exquisite Desktop view lock and blur overlay */}
      <div className="hidden min-[480px]:flex fixed inset-0 bg-[#0A0A0B]/95 backdrop-blur-3xl z-[100] flex-col items-center justify-center p-6 text-center text-[#F5F2EB]">
        <div className="max-w-[340px] w-full border border-[#C8B89A]/20 rounded-3xl p-8 bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(200,184,154,0.15)] flex flex-col items-center gap-6">
          <div className="w-14 h-24 rounded-2xl border border-[#C8B89A]/30 relative flex items-center justify-center bg-black/40 shadow-inner">
            <div className="w-3 h-1 rounded bg-[#C8B89A]/40 absolute top-2"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#C8B89A] absolute bottom-2.5 animate-pulse shadow-[0_0_8px_#C8B89A]"></div>
            <div className="w-8 h-12 rounded-lg border border-[#C8B89A]/15 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
              <span className="text-[10px] text-[#C8B89A]/50 font-sans tracking-wide">19:22</span>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl tracking-[0.2em] font-heading uppercase text-[#F5F2EB]" style={{ fontFamily: "'Cinzel', serif" }}>
              Mobile View Required
            </h2>
            <p className="text-xs font-body italic text-foreground/80 leading-relaxed max-w-xs px-2">
              This invitation has been precision-designed to be experienced on a mobile device.
            </p>
            <p className="text-[10px] tracking-[0.1em] uppercase text-[#C8B89A]/90 font-heading font-semibold pt-1">
              Please view on your phone
            </p>
          </div>
        </div>
      </div>

      {/* Centered Mobile-Portrait Frame Container (430px) */}
      <div className="relative z-10 max-w-[430px] w-full h-[100svh] shadow-2xl overflow-hidden bg-black flex flex-col">
        {/* Fixed Background texture layer constrained within the 430px frame */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={floralBg}
            alt="Wedding background texture"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to enhance text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className={`relative z-10 w-full h-full flex flex-col ${
            !isEnvelopeOpen ? "overflow-y-hidden" : "overflow-y-auto"
          } overflow-x-hidden`}
        >
          {/* Falling beige petals nested in the container */}
          {isEnvelopeOpen && <FallingPetals />}

          {/* Envelope overlay */}
          <Envelope isOpen={isEnvelopeOpen} onOpen={() => setIsEnvelopeOpen(true)} />

          {/* Main content */}
          {isEnvelopeOpen && (
            <div className="relative z-20 flex-1 flex flex-col">
              {/* Scroll-based invitation sections */}
              <ScrollInvitation />

              {/* Countdown timer */}
              <ScrollSection>
                <div className="flex flex-col items-center text-center">
                  <motion.h2
                    className="text-foreground font-heading text-sm font-semibold tracking-widest mb-2 uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Until the day
                  </motion.h2>
                  <CountdownTimer />
                  <motion.p
                    className="mt-16 text-4xl md:text-5xl text-[#F5F2EB]"
                    style={{ fontFamily: "'Aref Ruqaa', serif", fontWeight: 700 }}
                    dir="rtl"
                    lang="ar"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1 }}
                  >
                    إِنْ شَاءَ اللَّه
                  </motion.p>
                </div>
              </ScrollSection>

              {/* Closing bouquet and thanks */}
              <ScrollSection className="pb-[20vh]">
                <div className="flex flex-col justify-center items-center gap-8">
                  <motion.img
                    src={greenBouquet}
                    alt="Floral Bouquet"
                    className="w-72 md:w-[384px] lg:w-[480px] max-w-full opacity-90 drop-shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <motion.img
                      src={thanksNew}
                      alt="Thank You"
                      className="w-64 md:w-80 lg:w-[384px] max-w-full opacity-90 drop-shadow-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    />
                    <motion.p
                      className="text-center text-sm md:text-base text-foreground/90 font-body italic max-w-md px-4"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      Your presence gives us joy and happiness
                    </motion.p>
                  </div>
                </div>
              </ScrollSection>
            </div>
          )}
        </div>
      </div>

      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 pointer-events-none max-w-[430px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEnvelopeOpen && !isAtBottom ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-foreground text-[10px] md:text-xs font-heading font-semibold tracking-[0.2em] uppercase animate-shimmer">Please Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
