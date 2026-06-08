import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-07-19T18:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="flex justify-center gap-2 min-[360px]:gap-3 md:gap-4 mt-8 px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
        >
          <div className="bg-card backdrop-blur-sm rounded-xl shadow-soft px-3.5 py-3 md:px-5 md:py-4 border border-border min-w-[58px] md:min-w-[72px] flex items-center justify-center shadow-glow">
            <motion.span
              key={block.value}
              className="text-2xl md:text-3xl text-[#F5F2EB]"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: 500 }}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(block.value).padStart(2, "0")}
            </motion.span>
          </div>
          <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-foreground/80 font-bold mt-2" style={{ fontFamily: "'Cinzel', serif" }}>
            {block.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
