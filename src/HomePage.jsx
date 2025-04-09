import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [quote, setQuote] = useState("moonmakesme404");

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote("feelings not found. art detected.");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-5xl font-mono font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {quote}
      </motion.h1>

      <motion.div
        className="mt-8 w-40 h-40 rounded-full border-4 border-white flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img
          src="/moon-logo.png"
          alt="moon logo"
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      <motion.p
        className="mt-8 text-center text-sm text-gray-300 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        A digital realm where code meets poetry, and dreams crash like corrupted files.
      </motion.p>
    </div>
  );
}
