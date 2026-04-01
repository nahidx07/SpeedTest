"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, HelpCircle } from 'lucide-react';

export default function FastClone() {
  const [speed, setSpeed] = useState<number>(0);
  const [isTesting, setIsTesting] = useState(true);

  useEffect(() => {
    if (isTesting) {
      let current = 0;
      const target = 76.8;
      const interval = setInterval(() => {
        current += Math.random() * 5;
        if (current >= target) {
          setSpeed(target);
          setIsTesting(false);
          clearInterval(interval);
        } else {
          setSpeed(Number(current.toFixed(1)));
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTesting]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-10 font-sans">
      <div className="w-full max-w-4xl flex justify-start">
        <span className="text-2xl font-black text-[#222]">FAST<span className="text-gray-300 font-light">.com</span></span>
      </div>

      <main className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-baseline leading-none">
          <motion.span className="text-[12rem] md:text-[18rem] font-medium tracking-tighter text-[#222]">
            {speed}
          </motion.span>
          <div className="flex flex-col ml-4">
            <span className="text-3xl md:text-5xl font-light text-gray-500">Mbps</span>
            <button onClick={() => setIsTesting(true)} className="mt-4 text-gray-300 hover:text-black">
              <RefreshCw size={40} className={isTesting ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-4xl border-t border-gray-100 pt-8 flex justify-between text-gray-400 text-sm">
        <span>POWERED BY <span className="font-bold">NETFLIX</span></span>
        <div className="flex gap-4">
          <HelpCircle size={20} />
        </div>
      </footer>
    </div>
  );
}
