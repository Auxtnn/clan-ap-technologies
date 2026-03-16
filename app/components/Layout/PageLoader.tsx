"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <div className="flex flex-col items-center gap-10">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div
                className="absolute w-48 h-48 rounded-full border border-[#fe5300]/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute w-36 h-36 rounded-full border border-[#fe5300]/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="w-24 h-24 rounded-full bg-[#fe5300] flex items-center justify-center shadow-[0_0_30px_rgba(254,83,0,0.6)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-black font-bold text-xl">QA</span>
              </motion.div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-wide text-white">
                CLAN-AP
                <span className="text-[#fe5300]"> TECHNOLOGIES</span>
              </h2>

              <motion.p
                className="mt-3 text-sm tracking-[0.35em] text-[#fe5300]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                INITIALIZING SYSTEMS
              </motion.p>
            </div>

            <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#fe5300]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
