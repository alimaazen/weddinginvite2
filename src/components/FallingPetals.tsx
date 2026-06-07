import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 8,
      size: 15 + Math.random() * 25,
      rotate: Math.random() * 360,
      drift: (Math.random() * 2 - 1) * 70,
      sway: (Math.random() * 2 - 1) * 18,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 w-full h-full">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: -50,
          }}
          initial={{ y: -100, x: 0, rotate: 0, opacity: 0, scale: 0.9 }}
          animate={{
            y: "100svh",
            x: [0, petal.sway, petal.drift, petal.sway * -0.6, 0],
            rotate: petal.rotate + 360,
            scale: [0.9, 1, 0.95, 1],
            opacity: [0, 0.75, 0.85, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-petal"
          >
            <path
              d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
