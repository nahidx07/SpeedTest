"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, HelpCircle, Facebook, Twitter } from 'lucide-react';

export default function FastPage() {
  const [speed, setSpeed] = useState(0);
  const [isTesting, setIsTesting] = useState(true);

  useEffect(() => {
    if (isTesting) {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.random() * 6;
        if (current >= 76.8) {
          setSpeed(76.8);
          setIsTesting(false);
          clearInterval(interval);
        } else {
          setSpeed(parseFloat(current.toFixed(1)));
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTesting]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 md:p-14 bg-white">
      {/* Header Logo */}
      <div className="w-full max-w-5xl flex justify-start">
        <div className="text-3xl font-black tracking-tighter text-[#222]">
          FAST<span className="text-gray-300 font-light">.com</span>
        </div>
      </div>

      {/* Speed Counter Section */}
      <main className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-baseline leading-none speed-text relative">
          <motion.span 
            className="text-[12rem] md:text-[20rem] font-medium tracking-tighter"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            {speed}
          </motion.span>
          
          <div className="flex flex-col ml-6">
            <span className="text-4xl md:text-6xl font-light text-gray-400">Mbps</span>
            <button 
              onClick={() => setIsTesting(true)} 
              className="mt-6 text-gray-300 hover:text-black transition-all outline-none"
            >
              <RefreshCw size={50} strokeWidth={1} className={isTesting ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
        <div className="text-gray-400 text-sm tracking-widest font-medium uppercase">
          POWERED BY <span className="font-bold text-gray-700">NETFLIX</span>
        </div>

        <div className="flex items-center gap-8 text-gray-400">
          <div className="flex gap-4">
             <Twitter size={22} strokeWidth={1.5} className="cursor-pointer hover:text-black" />
             <Facebook size={22} strokeWidth={1.5} className="cursor-pointer hover:text-black" />
          </div>
          <div className="w-[1px] h-5 bg-gray-200"></div>
          <HelpCircle size={25} strokeWidth={1.5} className="cursor-pointer hover:text-black" />
        </div>
      </footer>
    </div>
  );
}
