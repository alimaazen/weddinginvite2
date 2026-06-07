import { motion } from "framer-motion";
import bismillahImg from "@/assets/bismillah-calligraphy.png";
import ScrollSection from "./ScrollSection";

const ScrollInvitation = () => {
  return (
    <div className="relative">
      <ScrollSection>
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={bismillahImg}
            alt="Bismillah - In the name of Allah"
            className="w-full max-w-[240px] mx-auto h-auto"
          />
          <p className="mt-6 text-foreground font-body text-[10px] min-[360px]:text-[11px] min-[400px]:text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
          <p className="mt-5 text-sm md:text-base text-foreground/90 font-body italic">
            We cordially invite your esteemed presence on the auspicious occasion of the wedding ceremony of
          </p>
        </motion.div>
      </ScrollSection>

      <ScrollSection>
        <motion.div
          className="relative text-center px-2 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <p
              className="text-2xl min-[360px]:text-3xl md:text-4xl text-[#F5F2EB] font-heading mb-2 whitespace-nowrap"
              style={{ fontFamily: '"Aligarh Arabic FREE PERSONAL USE Bd", "Aligarh Arabic"', fontWeight: 400 }}
              dir="rtl"
              lang="ar"
            >
              زيشال محمد قاسم
            </p>
            <p
              className="text-[11px] min-[360px]:text-xs min-[390px]:text-sm sm:text-base text-[#F5F2EB] tracking-[0.12em] min-[360px]:tracking-[0.18em] sm:tracking-[0.25em] font-semibold whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              ZEESHAL MOHAMMED KHASIM
            </p>
          </div>

          <p className="text-4xl font-display text-gold my-4 animate-glow">
            &
          </p>

          <div>
            <p
              className="text-2xl min-[360px]:text-3xl md:text-4xl text-[#F5F2EB] font-heading mb-2 whitespace-nowrap"
              style={{ fontFamily: '"Aligarh Arabic FREE PERSONAL USE Bd", "Aligarh Arabic"', fontWeight: 400 }}
              dir="rtl"
              lang="ar"
            >
              نديم محمد رافي
            </p>
            <p
              className="text-[11px] min-[360px]:text-xs min-[390px]:text-sm sm:text-base text-[#F5F2EB] tracking-[0.12em] min-[360px]:tracking-[0.18em] sm:tracking-[0.25em] font-semibold whitespace-nowrap"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              NADEEM MOHAMMED RAFI
            </p>
          </div>
        </motion.div>
      </ScrollSection>

      <ScrollSection>
        <div className="text-center max-w-lg w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-foreground font-heading text-sm font-semibold tracking-widest mb-8 uppercase">SAVE THE DATE</h2>
            <div className="mb-14">
              <h3 className="text-2xl md:text-3xl font-display text-[#F5F2EB] mb-4">Nikkah</h3>
              <div className="flex items-center justify-center gap-2.5 min-[360px]:gap-3.5 md:gap-6 w-full max-w-[370px] mx-auto px-1">
                <div className="text-right flex flex-col justify-center flex-1 min-w-0 pr-1">
                  <span className="text-[10px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm md:text-base font-heading tracking-[0.02em] min-[360px]:tracking-[0.05em] uppercase text-foreground block whitespace-nowrap">Sunday</span>
                  <span className="text-[10px] min-[360px]:text-xs min-[390px]:text-sm md:text-base font-heading tracking-[0.05em] uppercase text-foreground/60 mt-0.5 block whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
                    11:00 AM
                  </span>
                </div>
                <div className="h-10 md:h-14 w-[1.5px] shrink-0 bg-[#C8B89A] shadow-[0_0_6px_rgba(200,184,154,0.6)]"></div>
                <div className="flex flex-col items-center justify-center w-12 min-[360px]:w-14 md:w-16 shrink-0">
                  <span
                    className="text-4xl min-[360px]:text-5xl md:text-6xl text-[#F5F2EB] animate-glow"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                  >
                    19
                  </span>
                </div>
                <div className="h-10 md:h-14 w-[1.5px] shrink-0 bg-[#C8B89A] shadow-[0_0_6px_rgba(200,184,154,0.6)]"></div>
                <div className="text-left flex flex-col justify-center flex-1 min-w-0 pl-1">
                  <span className="text-[10px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm md:text-base font-heading tracking-[0.02em] min-[360px]:tracking-[0.05em] uppercase text-foreground block whitespace-nowrap">July</span>
                  <span className="text-[10px] min-[360px]:text-xs min-[390px]:text-sm md:text-base font-heading tracking-[0.05em] uppercase text-foreground/60 mt-0.5 block whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>2026</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display text-[#F5F2EB] mb-4">Reception</h3>
              <div className="flex items-center justify-center gap-2.5 min-[360px]:gap-3.5 md:gap-6 w-full max-w-[370px] mx-auto px-1">
                <div className="text-right flex flex-col justify-center flex-1 min-w-0 pr-1">
                  <span className="text-[10px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm md:text-base font-heading tracking-[0.01em] min-[360px]:tracking-[0.03em] uppercase text-foreground block whitespace-nowrap">Wednesday</span>
                  <span className="text-[10px] min-[360px]:text-xs min-[390px]:text-sm md:text-base font-heading tracking-[0.05em] uppercase text-foreground/60 mt-0.5 block whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
                    12:00 PM
                  </span>
                </div>
                <div className="h-10 md:h-14 w-[1.5px] shrink-0 bg-[#C8B89A] shadow-[0_0_6px_rgba(200,184,154,0.6)]"></div>
                <div className="flex flex-col items-center justify-center w-12 min-[360px]:w-14 md:w-16 shrink-0">
                  <span
                    className="text-4xl min-[360px]:text-5xl md:text-6xl text-[#F5F2EB] animate-glow"
                    style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
                  >
                    22
                  </span>
                </div>
                <div className="h-10 md:h-14 w-[1.5px] shrink-0 bg-[#C8B89A] shadow-[0_0_6px_rgba(200,184,154,0.6)]"></div>
                <div className="text-left flex flex-col justify-center flex-1 min-w-0 pl-1">
                  <span className="text-[10px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm md:text-base font-heading tracking-[0.02em] min-[360px]:tracking-[0.05em] uppercase text-foreground block whitespace-nowrap">July</span>
                  <span className="text-[10px] min-[360px]:text-xs min-[390px]:text-sm md:text-base font-heading tracking-[0.05em] uppercase text-foreground/60 mt-0.5 block whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      <ScrollSection>
        <div className="text-center max-w-lg w-full px-4">
          <motion.p
            className="text-foreground font-heading text-sm font-semibold tracking-widest mb-10 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            VENUE
          </motion.p>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-foreground/70 font-heading mb-2">Nikkah</p>
            <h3 className="text-3xl md:text-4xl font-display text-[#F5F2EB] font-bold mb-2">Majestic Ceremonial Hall</h3>
            <p className="text-lg md:text-xl font-heading text-foreground/80 mb-6">Thrissur</p>

            <a
              href="https://maps.google.com/?q=Majestic+Ceremonial+Hall+Thrissur"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-xl border border-border shadow-soft bg-card">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    src="https://www.google.com/maps?q=Majestic%20Ceremonial%20Hall%20Thrissur&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  />
                </div>
                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-popover backdrop-blur-sm px-4 py-2 rounded-full shadow-soft border border-border">
                    <span className="text-sm font-heading text-rose tracking-wide">
                      Open in Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-foreground/70 font-heading mb-2">Reception</p>
            <h3 className="text-3xl md:text-4xl font-display text-[#F5F2EB] font-bold mb-2">Nayanar Academy</h3>
            <p className="text-lg md:text-xl font-heading text-foreground/80 mb-6">Kannur</p>

            <a
              href="https://maps.google.com/?q=Nayanar+Academy+Kannur"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-xl border border-border shadow-soft bg-card">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    src="https://www.google.com/maps?q=Nayanar%20Academy%20Kannur&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="pointer-events-none"
                  />
                </div>
                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-popover backdrop-blur-sm px-4 py-2 rounded-full shadow-soft border border-border">
                    <span className="text-sm font-heading text-rose tracking-wide">
                      Open in Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </ScrollSection>
    </div>
  );
};

export default ScrollInvitation;
